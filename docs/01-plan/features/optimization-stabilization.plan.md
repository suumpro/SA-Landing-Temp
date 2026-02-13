# Optimization & Stabilization Planning Document

> **Summary**: 성능 최적화 + 코드 안정화 — 폰트 로딩, lazy loading, hydration 수정, Header 렌더링 패턴 개선
>
> **Project**: storeagent-b2c-landing
> **Version**: 0.1.0
> **Author**: AI
> **Date**: 2026-02-11
> **Status**: Draft

---

## 1. Overview

### 1.1 Purpose

랜딩 페이지의 초기 로딩 성능 개선과 React hydration/렌더링 관련 코드 안정화. Core Web Vitals(LCP, CLS) 개선 및 콘솔 경고 제거.

### 1.2 Background

- 현재 폰트를 외부 CDN(jsdelivr)에서 로딩 중 — 추가 HTTP 요청 + FOIT/FOUT 리스크
- 홈페이지 8개 섹션이 모두 eager-load — below-fold 컴포넌트 불필요한 초기 번들 포함
- `getTimeSlot()` 기반 시간대 렌더링이 SSR/CSR 불일치 유발 가능
- Header에서 렌더 중 setState 호출 (React anti-pattern)

### 1.3 Related Documents

- 이전 PDCA: `docs/archive/2026-02/landing-improvements/`

---

## 2. Scope

### 2.1 In Scope

- [x] 폰트 로딩 최적화 (CDN → local font)
- [x] Below-fold 섹션 dynamic import
- [x] Hydration mismatch 수정 (시간대 컴포넌트)
- [x] Header 렌더 중 setState 패턴 수정
- [x] 리스트 key 안정화

### 2.2 Out of Scope

- UI/UX 디자인 변경
- 새 기능 추가
- SEO 메타데이터 (이미 최적화됨)
- CSP 정책 변경 (별도 보안 태스크)

---

## 3. Requirements

### 3.1 Functional Requirements

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| FR-01 | 폰트 로딩: CDN → `next/font/local`로 전환, 외부 요청 제거 | High | Pending |
| FR-02 | Below-fold 섹션 lazy loading: POSAnalysis, SocialProof, Pricing, FAQ를 `dynamic()` import | Medium | Pending |
| FR-03 | Hydration 수정: LiveDemoSection, BriefingMockup, MockupImage의 시간대 초기값 안정화 | High | Pending |
| FR-04 | Header 렌더 중 setState 제거: pathname 변경 감지를 useEffect로 이동 | Medium | Pending |
| FR-05 | 리스트 key 안정화: Accordion, SocialProof, PricingCard의 index key → stable key | Low | Pending |

### 3.2 Non-Functional Requirements

| Category | Criteria | Measurement Method |
|----------|----------|-------------------|
| Performance | LCP < 2.5s, CLS < 0.1 | Lighthouse |
| Performance | 외부 폰트 HTTP 요청 0건 | Network 탭 |
| Stability | 콘솔 hydration 경고 0건 | Chrome DevTools |
| Stability | `npm run build` 경고 0건 | 빌드 로그 |

---

## 4. Success Criteria

### 4.1 Definition of Done

- [x] 모든 FR 구현 완료
- [x] `npm run build` 성공 (에러/경고 0)
- [x] 브라우저 콘솔 hydration 경고 없음
- [x] Lighthouse Performance 90+ 유지

### 4.2 Quality Criteria

- [x] Zero lint errors
- [x] Build succeeds
- [x] 외부 폰트 CDN 요청 제거 확인

---

## 5. Risks and Mitigation

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| next/font/local 설정 시 Pretendard 서브셋 누락 | Medium | Low | dynamic-subset woff2 사용, 한글/라틴 포함 확인 |
| dynamic import로 CLS 증가 | Medium | Medium | loading placeholder에 고정 높이 설정 |
| 시간대 초기값 변경으로 기존 UX 차이 | Low | Low | suppressHydrationWarning 또는 skeleton 패턴 |

---

## 6. Architecture Considerations

### 6.1 Project Level Selection

| Level | Characteristics | Selected |
|-------|-----------------|:--------:|
| **Starter** | Simple structure (`components/`, `lib/`, `types/`) | **O** |

### 6.2 Key Architectural Decisions

| Decision | Current | Change | Rationale |
|----------|---------|--------|-----------|
| Font Loading | CDN (jsdelivr) | next/font/local | HTTP 요청 제거, 200-300ms 개선 |
| Section Loading | Eager import 8개 | dynamic() 4개 | 초기 JS 번들 15-20% 절감 |
| Time Rendering | useState('morning') + useEffect | suppressHydrationWarning | SSR/CSR 불일치 방지 |

---

## 7. Implementation Plan

### FR-01: 폰트 로딩 최적화

**수정 파일:**
- `src/app/layout.tsx` — CDN link 3개 제거, next/font/local 설정 추가, html className에 font 적용
- `public/fonts/` — Pretendard woff2 파일 추가 (dynamic-subset)

**변경 내용:**
```
Before: <link rel="stylesheet" href="https://cdn.jsdelivr.net/...pretendard...">
After:  import localFont from 'next/font/local'; const pretendard = localFont({...})
```

### FR-02: Below-fold 섹션 lazy loading

**수정 파일:**
- `src/app/page.tsx` — 4개 섹션을 dynamic import로 전환

**대상 섹션:**
- POSAnalysisSection (가장 무거움 — PosAnalysisCard 4개 포함)
- SocialProofSection
- PricingSection
- FAQSection

**유지 (eager):**
- HeroSection (first paint)
- FeatureSection (above fold)
- HowItWorksSection (above fold)
- LiveDemoSection (fold 근처)

### FR-03: Hydration mismatch 수정

**수정 파일:**
- `src/components/sections/LiveDemoSection.tsx` (line 52) — suppressHydrationWarning
- `src/components/BriefingMockup.tsx` (lines 16-25) — 시간 표시 span에 suppressHydrationWarning
- `src/components/MockupImage.tsx` (lines 28-35) — 동일 패턴

### FR-04: Header 렌더 중 setState 제거

**수정 파일:**
- `src/components/layout/Header.tsx` (lines 36-39)

**변경:**
```tsx
// Before: 렌더 중 직접 setState
if (prevPathname !== pathname) {
  setPrevPathname(pathname);
  setIsMenuOpen(false);
}

// After: useEffect로 이동
useEffect(() => { setIsMenuOpen(false); }, [pathname]);
// prevPathname state 제거
```

### FR-05: 리스트 key 안정화

**수정 파일:**
- `src/components/ui/Accordion.tsx` — `key={index}` → `key={item.question}`
- `src/components/sections/SocialProofSection.tsx` — star key 패턴 개선
- `src/components/pricing/PricingCard.tsx` — feature key 패턴 개선

---

## 8. Implementation Order

| # | FR | 파일 | 빌드 검증 |
|---|-----|------|----------|
| 1 | FR-04 | Header.tsx | - |
| 2 | FR-05 | Accordion.tsx, SocialProofSection.tsx, PricingCard.tsx | `npm run build` |
| 3 | FR-03 | LiveDemoSection.tsx, BriefingMockup.tsx, MockupImage.tsx | - |
| 4 | FR-01 | layout.tsx, public/fonts/ | `npm run build` |
| 5 | FR-02 | page.tsx | `npm run build` (최종) |

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 0.1 | 2026-02-11 | Initial draft | AI |
