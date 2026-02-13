# ux-ui-polishing Design Document

> **Summary**: UX/UI 일관성 및 모바일 접근성 폴리싱 — 구체적 코드 변경 명세
>
> **Project**: storeagent-b2c-landing
> **Version**: 0.1.0
> **Author**: STOREAGENT
> **Date**: 2026-02-11
> **Status**: Completed
> **Planning Doc**: [ux-ui-polishing.plan.md](../01-plan/features/ux-ui-polishing.plan.md)

---

## 1. Overview

### 1.1 Design Goals

- 모바일 터치 타겟 WCAG 2.1 AA 기준(44px+) 충족
- scale 변환 제거로 레이아웃 안정성 확보
- CTA 버튼 크기 토큰화로 디자인 시스템 일관성
- 폼 유효성 검사 시각 피드백 추가

### 1.2 Design Principles

- CSS-only 변경 우선 (컴포넌트 로직 무변경)
- 기존 ring 패턴(POS 섹션) 재사용으로 일관성
- 최소 변경 원칙 (6개 파일, 인라인→토큰 전환)

---

## 2. Detailed Specifications

### FR-01: Header 모바일 터치 타겟

**파일**: `src/components/layout/Header.tsx`

| 요소 | 현재 클래스 | 변경 클래스 | 결과 크기 |
|------|------------|------------|----------|
| 모바일 메뉴 버튼 | `p-2.5` (36px) | `p-3` (48px) | 48px |
| 모바일 nav 버튼 (anchor) | `py-2` (32px) | `py-3` (44px) | 44px+ |
| 모바일 nav 링크 | `py-2` (32px) | `py-3` (44px) | 44px+ |
| 모바일 "무료 구독" 버튼 | `py-2` (32px) | `py-3` (44px) | 44px+ |
| 데스크톱 "무료 구독" | `px-4 py-2` | `px-5 py-2.5` | 40px (데스크톱 OK) |
| 데스크톱 "플랜 보기" | 인라인 스타일 | `btn-primary btn-sm rounded-lg` | 토큰화 |

### FR-02: Pricing 카드 scale 제거

**파일**: `src/components/sections/PricingSection.tsx`

```
// 변경 전 (L37)
'bg-primary text-white border-2 border-primary shadow-xl lg:scale-105'

// 변경 후
'bg-primary text-white border-2 border-primary shadow-lg ring-2 ring-primary/30 ring-offset-2'
```

변경 근거:
- `scale-105` → 태블릿(768-1024px)에서 그리드 넘침 발생
- `ring-2 ring-primary/30 ring-offset-2` → POS 섹션 탭에서 이미 검증된 패턴
- `shadow-xl` → `shadow-lg` (ring과 shadow 중첩 과다 방지)

### FR-03: LiveDemo 탭 scale → ring

**파일**: `src/components/sections/LiveDemoSection.tsx`

```
// 변경 전 (L88)
활성: 'bg-primary text-white shadow-md scale-105'
비활성: 'bg-gray-100 text-gray-600 hover:bg-gray-200'

// 변경 후
활성: 'bg-primary text-white shadow-md ring-2 ring-primary/30 ring-offset-2'
비활성: 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'
```

변경 근거:
- POSAnalysisSection 탭과 동일 패턴 통일
- 비활성 탭에 `border border-gray-200` 추가 → ring-offset 시각적 기준선

### FR-04: CTA 버튼 크기 토큰

**파일**: `src/app/globals.css`

```css
/* Button Size Variants */
.btn-sm { padding: 8px 16px; font-size: 14px; }    /* ~32px 높이, Header 등 */
.btn-lg { padding: 16px 32px; font-size: 16px; }    /* ~52px 높이, Hero CTA 등 */
/* btn-primary/btn-secondary 기본 padding(12px 24px) = btn-md 역할 */
```

적용 매핑:

| 파일 | 요소 | 변경 전 | 변경 후 |
|------|------|---------|---------|
| `HeroSection.tsx` L33 | 구독 CTA | `btn-primary text-base px-8 py-4` | `btn-primary btn-lg` |
| `HeroSection.tsx` L41 | 플랜보기 | `btn-secondary text-base px-8 py-4` | `btn-secondary btn-lg text-center` |
| `Header.tsx` L109 | 플랜보기 | 인라인 bg/text/hover | `btn-primary btn-sm rounded-lg` |
| `POSAnalysisSection.tsx` L83 | 고급형 CTA | `btn-primary ... px-8 py-3` | `btn-primary ...` (기본=md) |

### FR-05: 폼 포커스/Invalid 스타일

**파일**: `src/app/globals.css`

```css
/* 폼 요소 focus-visible → global outline 제외 (자체 ring 사용) */
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: none;
}

/* aria-invalid 시 빨간 border */
input[aria-invalid="true"],
select[aria-invalid="true"] {
  border-color: var(--error);
}

input[aria-invalid="true"]:focus,
select[aria-invalid="true"]:focus {
  --tw-ring-color: var(--error);
}
```

영향 받는 컴포넌트 (코드 수정 불필요 — CSS만으로 적용):
- `NewsletterForm.tsx` — email input (`aria-invalid` 이미 설정됨)
- `InlineContactForm.tsx` — name, contact, storeCount inputs/select

---

## 3. Implementation Order

| # | 작업 | 파일 | 의존성 |
|---|------|------|--------|
| 1 | btn 사이즈 토큰 + 폼 스타일 | `globals.css` | 없음 |
| 2 | Header 터치 타겟 + CTA | `Header.tsx` | Step 1 (btn-sm) |
| 3 | Pricing scale → ring | `PricingSection.tsx` | 없음 |
| 4 | LiveDemo 탭 → ring | `LiveDemoSection.tsx` | 없음 |
| 5 | Hero CTA btn-lg | `HeroSection.tsx` | Step 1 (btn-lg) |
| 6 | POS CTA 정리 | `POSAnalysisSection.tsx` | 없음 |

---

## 4. Test Plan

| 검증 항목 | 방법 | 기준 |
|-----------|------|------|
| 빌드 성공 | `npm run build` | 0 errors |
| 터치 타겟 | DevTools 375px 뷰 요소 검사 | 모든 인터랙티브 요소 44px+ |
| Pricing 레이아웃 | 768px-1024px 뷰 | 카드 넘침 없음 |
| LiveDemo 탭 | 탭 전환 | 레이아웃 흔들림 없음 |
| 폼 invalid | 빈 이메일 제출 | 빨간 border 표시 |

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | 2026-02-11 | 구현 완료 기반 설계 문서 작성 | STOREAGENT |
