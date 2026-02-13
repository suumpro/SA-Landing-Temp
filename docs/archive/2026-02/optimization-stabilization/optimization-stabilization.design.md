# Optimization & Stabilization Design Document

> **Summary**: 폰트 로컬화, lazy loading, hydration 수정, Header 패턴 개선, key 안정화 상세 설계
>
> **Project**: storeagent-b2c-landing
> **Version**: 0.1.0
> **Author**: AI
> **Date**: 2026-02-11
> **Status**: Draft
> **Planning Doc**: [optimization-stabilization.plan.md](../../01-plan/features/optimization-stabilization.plan.md)

---

## 1. Overview

### 1.1 Design Goals

- 외부 CDN 폰트 요청 제거 → LCP 200-300ms 개선
- Below-fold 섹션 lazy loading → 초기 JS 번들 15-20% 절감
- SSR/CSR hydration 불일치 제거 → 콘솔 경고 0건
- React anti-pattern 제거 → strict mode 완전 호환

### 1.2 Design Principles

- 최소 변경: 기존 UX/UI를 변경하지 않고 내부 코드만 개선
- 점진적 적용: 각 FR이 독립적으로 빌드 가능
- 안전 우선: CLS 증가 방지를 위한 placeholder 높이 지정

---

## 2. FR-01: 폰트 로딩 최적화

### 2.1 현재 상태 (Before)

**파일**: `src/app/layout.tsx` (lines 60-72)

```html
<link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
<link rel="preload" as="style" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/..." />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/..." />
<style dangerouslySetInnerHTML={{ __html: `@font-face{font-family:'Pretendard Variable';font-display:swap;}` }} />
```

**문제점:**
- 외부 CDN 2회 요청 (preload + stylesheet)
- preconnect 추가 요청
- dangerouslySetInnerHTML로 중복 font-face 선언
- CDN 장애 시 폰트 로드 실패 리스크

### 2.2 변경 설계 (After)

**방식**: `pretendard` npm 패키지 + CSS @import

npm 패키지 방식 선택 (next/font/local 대비 장점: woff2 수동 관리 불필요, npm update 자동 업데이트, dynamic-subset 유지)

**의존성 추가**: `npm install pretendard`

**수정 파일**: `src/app/globals.css`

```css
@import "tailwindcss";
@import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
```

**수정 파일**: `src/app/layout.tsx`

```tsx
// Before: CDN links 4개 in <head>
// After: <head>에 manifest link만 유지

<head>
  <link rel="manifest" href="/manifest.json" />
</head>
```

**삭제 항목** (layout.tsx에서):
- `<link rel="preconnect" href="https://cdn.jsdelivr.net" ...>`
- `<link rel="preload" as="style" ...>`
- `<link rel="stylesheet" ...>`
- `<style dangerouslySetInnerHTML ...>`

**next.config.ts CSP 수정**:
- `font-src` 에서 `https://cdn.jsdelivr.net` 제거
- `style-src` 에서 `https://cdn.jsdelivr.net` 제거

---

## 3. FR-02: Below-fold 섹션 Lazy Loading

### 3.1 현재 상태 (Before)

**파일**: `src/app/page.tsx`

```tsx
import HeroSection from '@/components/sections/HeroSection';
import FeatureSection from '@/components/sections/FeatureSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import LiveDemoSection from '@/components/sections/LiveDemoSection';
import POSAnalysisSection from '@/components/sections/POSAnalysisSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
```

모든 8개 섹션이 eager import — 초기 번들에 전부 포함.

### 3.2 변경 설계 (After)

```tsx
// Eager (above fold — first paint에 필요)
import HeroSection from '@/components/sections/HeroSection';
import FeatureSection from '@/components/sections/FeatureSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import LiveDemoSection from '@/components/sections/LiveDemoSection';

// Lazy (below fold — 스크롤 시 로드)
import dynamic from 'next/dynamic';

const POSAnalysisSection = dynamic(
  () => import('@/components/sections/POSAnalysisSection'),
  { loading: () => <div className="min-h-[600px]" /> }
);
const SocialProofSection = dynamic(
  () => import('@/components/sections/SocialProofSection'),
  { loading: () => <div className="min-h-[400px]" /> }
);
const PricingSection = dynamic(
  () => import('@/components/sections/PricingSection'),
  { loading: () => <div className="min-h-[500px]" /> }
);
const FAQSection = dynamic(
  () => import('@/components/sections/FAQSection'),
  { loading: () => <div className="min-h-[400px]" /> }
);
```

**Placeholder 높이 근거:**
| 섹션 | 예상 높이 | min-h 설정 |
|------|-----------|------------|
| POSAnalysisSection | ~700px (4카드 그리드) | 600px |
| SocialProofSection | ~450px (3카드 그리드) | 400px |
| PricingSection | ~550px (3카드 + CTA) | 500px |
| FAQSection | ~400px (아코디언) | 400px |

**CLS 방지**: loading placeholder에 `min-h-[]` 지정하여 레이아웃 시프트 최소화.

---

## 4. FR-03: Hydration Mismatch 수정

### 4.1 문제 분석

3개 컴포넌트에서 동일 패턴:
```tsx
const [timeSlot, setTimeSlot] = useState<TimeSlot>('morning'); // SSR 값
useEffect(() => { setTimeSlot(getTimeSlot()); }, []);           // CSR 값 (다를 수 있음)
```

SSR은 항상 `'morning'` 렌더 → CSR에서 실제 시간대로 변경 → hydration mismatch.

### 4.2 수정 대상 파일

| 파일 | 위치 | 현재 | 수정 |
|------|------|------|------|
| `src/components/sections/LiveDemoSection.tsx` | line 51-52 | `useState('morning')` + useEffect | 동일 유지 + suppressHydrationWarning |
| `src/components/BriefingMockup.tsx` | lines 16-25 | `useState('morning')` + useEffect | 시간 표시 요소에 suppressHydrationWarning |
| `src/components/MockupImage.tsx` | lines 29-35 | `useState('morning')` + useEffect | 시간 표시 요소에 suppressHydrationWarning |

### 4.3 수정 전략

**선택한 방식**: `suppressHydrationWarning` 적용

이유:
- 시간 기반 데이터는 SSR/CSR 불일치가 **의도된 동작**
- Server Component로 이동하면 실시간 시간대 반영 불가
- `suppressHydrationWarning`은 React 공식 권장 패턴 (시간/날짜 표시)

**적용 위치**: 시간에 따라 달라지는 **텍스트 렌더링 요소**에만 적용

```tsx
// LiveDemoSection.tsx — 시간 표시 텍스트
<p className="..." suppressHydrationWarning>
  지금 {timeLabels[timeSlot]} 시각 기준 브리핑입니다 ...
</p>

// BriefingMockup.tsx — 시간 표시
<span className="text-white text-xs font-medium" suppressHydrationWarning>{time}</span>
<h4 className="text-white font-bold text-lg" suppressHydrationWarning>
  {dateOverride ? 'SA 오늘의 브리핑' : getBriefingTitle(timeSlot)}
</h4>
<p className="text-white/80 text-sm" suppressHydrationWarning>{today} {time}</p>

// MockupImage.tsx — 시간 표시
<span className="text-white text-xs font-medium" suppressHydrationWarning>
  {getBriefingTime(timeSlot)}
</span>
<h3 className="text-white font-bold text-lg" suppressHydrationWarning>
  {getBriefingTitle(timeSlot)}
</h3>
<p className="text-white/80 text-sm" suppressHydrationWarning>
  {today} {getBriefingTime(timeSlot)}
</p>
```

**주의**: `suppressHydrationWarning`은 해당 요소의 **직접 자식 텍스트**에만 적용됨. 하위 컴포넌트 트리 전체에는 적용되지 않으므로 각 텍스트 요소에 개별 적용 필요.

---

## 5. FR-04: Header 렌더 중 setState 제거

### 5.1 현재 상태 (Before)

**파일**: `src/components/layout/Header.tsx` (lines 18-19, 36-39)

```tsx
const [prevPathname, setPrevPathname] = useState(pathname);

// 렌더 중 직접 setState (anti-pattern)
if (prevPathname !== pathname) {
  setPrevPathname(pathname);
  setIsMenuOpen(false);
}
```

**문제**: React 렌더 함수 내에서 setState 호출은 무한 루프 또는 경고 유발 가능.

### 5.2 변경 설계 (After)

```tsx
// 삭제: prevPathname state
// const [prevPathname, setPrevPathname] = useState(pathname);

// 삭제: 렌더 중 조건부 setState 블록 전체 (lines 36-39)

// 추가: useEffect로 대체
useEffect(() => {
  setIsMenuOpen(false);
}, [pathname]);
```

**변경 범위**:
- `prevPathname` state 제거 (line 18)
- 렌더 중 if 블록 제거 (lines 36-39)
- useEffect 추가 (기존 useEffect 아래)
- 주석 "Close mobile menu on route change" 유지

---

## 6. FR-05: 리스트 Key 안정화

### 6.1 수정 대상

| 파일 | 위치 | 현재 key | 변경 key |
|------|------|----------|----------|
| `src/components/ui/Accordion.tsx` | line 72 | `key={index}` | `key={item.question}` |
| `src/components/sections/SocialProofSection.tsx` | line 32 | `key={i}` | `key={\`star-${i}\`}` |
| `src/components/pricing/PricingCard.tsx` | line 86 | `key={index}` | `key={feature.text}` |

### 6.2 상세 변경

**Accordion.tsx** (line 72):
```tsx
// Before
<AccordionItem key={index} ...

// After
<AccordionItem key={item.question} ...
```

**SocialProofSection.tsx** (line 32):
```tsx
// Before
<span key={i} className="text-yellow-400" aria-hidden="true">

// After
<span key={`star-${i}`} className="text-yellow-400" aria-hidden="true">
```

**PricingCard.tsx** (line 86):
```tsx
// Before
<li key={index} ...

// After
<li key={feature.text} ...
```

---

## 7. Implementation Order

| # | FR | 수정 파일 | 의존성 | 빌드 검증 |
|---|-----|---------|--------|----------|
| 1 | FR-04 | Header.tsx | 없음 | - |
| 2 | FR-05 | Accordion.tsx, SocialProofSection.tsx, PricingCard.tsx | 없음 | `npm run build` |
| 3 | FR-03 | LiveDemoSection.tsx, BriefingMockup.tsx, MockupImage.tsx | 없음 | - |
| 4 | FR-01 | layout.tsx, globals.css, next.config.ts, src/fonts/ | 폰트 파일 다운로드 | `npm run build` |
| 5 | FR-02 | page.tsx | FR-01 이후 (CSP 변경 반영) | `npm run build` (최종) |

### 변경 파일 전체 목록

| 파일 | 변경 유형 | FR |
|------|-----------|----|
| `src/components/layout/Header.tsx` | 수정 | FR-04 |
| `src/components/ui/Accordion.tsx` | 수정 | FR-05 |
| `src/components/sections/SocialProofSection.tsx` | 수정 | FR-05 |
| `src/components/pricing/PricingCard.tsx` | 수정 | FR-05 |
| `src/components/sections/LiveDemoSection.tsx` | 수정 | FR-03 |
| `src/components/BriefingMockup.tsx` | 수정 | FR-03 |
| `src/components/MockupImage.tsx` | 수정 | FR-03 |
| `src/app/layout.tsx` | 수정 | FR-01 |
| `src/app/globals.css` | 수정 | FR-01 |
| `next.config.ts` | 수정 | FR-01 |
| `package.json` | 수정 | FR-01 (pretendard 의존성 추가) |
| `src/app/page.tsx` | 수정 | FR-02 |

**총 12개 파일** (수정 12)

---

## 8. Verification Checklist

- [ ] `npm run build` 성공 (에러 0, 경고 0)
- [ ] 브라우저 Network 탭: jsdelivr.net 요청 0건
- [ ] 브라우저 Console: hydration 경고 0건
- [ ] Lighthouse Performance 점수 90+ 유지
- [ ] 폰트 정상 렌더링 (한글/영문/숫자)
- [ ] Below-fold 섹션 스크롤 시 정상 로드
- [ ] 모바일 메뉴 라우트 변경 시 자동 닫힘 유지
- [ ] 아코디언 열기/닫기 정상 동작

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 0.1 | 2026-02-11 | Initial draft | AI |
