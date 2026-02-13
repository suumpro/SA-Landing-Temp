# ux-ui-polishing Planning Document

> **Summary**: UX/UI 일관성 및 모바일 접근성 폴리싱
>
> **Project**: storeagent-b2c-landing
> **Version**: 0.1.0
> **Author**: STOREAGENT
> **Date**: 2026-02-11
> **Status**: Completed

---

## 1. Overview

### 1.1 Purpose

배포 완료 후 발견된 UX/UI 불일치 및 접근성 미달 항목을 해소하여 디자인 일관성과 모바일 사용성을 개선한다.

### 1.2 Background

- 탐색 결과: 터치 타겟 WCAG 44px 미달, scale 레이아웃 흔들림, CTA 버튼 크기 불일치, 폼 invalid 시각 피드백 부재 발견
- 기능 변경 없이 CSS/클래스 수정만으로 해결 가능한 범위

### 1.3 Related Documents

- 선행 PDCA: optimization-stabilization (archived, 97% match)

---

## 2. Scope

### 2.1 In Scope

- [x] Header 모바일 터치 타겟 44px+ 확보
- [x] Pricing 카드 scale-105 제거 → ring 스타일
- [x] LiveDemo 탭 scale-105 → ring 스타일 통일
- [x] CTA 버튼 크기 토큰화 (btn-sm, btn-lg)
- [x] 폼 입력 포커스/invalid 시각 피드백 통일

### 2.2 Out of Scope

- 다크 모드
- 새로운 컴포넌트/페이지 추가
- 기능 로직 변경

---

## 3. Requirements

### 3.1 Functional Requirements

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| FR-01 | Header 모바일 터치 타겟 WCAG 44px+ 확보 (메뉴 버튼, nav 항목, CTA) | High | Done |
| FR-02 | Pricing 인기 카드 scale-105 → ring 스타일 (태블릿 넘침 해소) | High | Done |
| FR-03 | LiveDemo 탭 scale-105 → ring 스타일 (POS 섹션과 통일) | Medium | Done |
| FR-04 | CTA 버튼 크기 토큰화 (btn-sm/btn-lg) 및 전 섹션 적용 | Medium | Done |
| FR-05 | 폼 focus-visible 이중 적용 해소 + aria-invalid 빨간 border 피드백 | Medium | Done |

### 3.2 Non-Functional Requirements

| Category | Criteria | Measurement Method |
|----------|----------|-------------------|
| Accessibility | WCAG 2.1 AA 터치 타겟 44px+ | DevTools 요소 크기 검사 |
| Layout | scale 변환 없이 레이아웃 안정 | 태블릿/모바일 화면 확인 |
| Consistency | 동일 패턴(ring) 전 섹션 통일 | 코드 리뷰 |

---

## 4. Success Criteria

### 4.1 Definition of Done

- [x] 모든 FR 구현 완료
- [x] npm run build 성공
- [x] 코드 커밋 & 푸시 완료

### 4.2 Quality Criteria

- [x] Zero lint errors
- [x] Build succeeds
- [x] 모바일(375px) 터치 타겟 44px+ 확인

---

## 5. Risks and Mitigation

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| ring 스타일이 기존 border와 겹침 | Low | Low | ring-offset-2로 분리 |
| btn-sm/btn-lg 토큰이 기존 inline 스타일 override 안됨 | Medium | Low | CSS cascade 순서 확인 |

---

## 6. Architecture Considerations

### 6.1 Project Level Selection

| Level | Characteristics | Recommended For | Selected |
|-------|-----------------|-----------------|:--------:|
| **Starter** | Simple structure | Static sites, landing pages | ✅ |

### 6.2 Key Architectural Decisions

| Decision | Options | Selected | Rationale |
|----------|---------|----------|-----------|
| Framework | Next.js 16 | Next.js 16 | 기존 프로젝트 |
| Styling | Tailwind CSS v4 | Tailwind CSS v4 | 기존 프로젝트 |
| 강조 패턴 | scale vs ring vs border | ring | 레이아웃 흔들림 없음, POS 섹션 선행 사례 |

---

## 7. Modified Files

| File | Changes |
|------|---------|
| `src/app/globals.css` | btn-sm/btn-lg 토큰, 폼 focus-visible/invalid 스타일 |
| `src/components/layout/Header.tsx` | 터치 타겟 p-3/py-3, CTA btn-primary btn-sm |
| `src/components/sections/PricingSection.tsx` | scale-105 → ring-2 ring-primary/30 ring-offset-2 |
| `src/components/sections/LiveDemoSection.tsx` | 탭 scale-105 → ring, 비활성 border 추가 |
| `src/components/sections/HeroSection.tsx` | CTA btn-lg 적용 |
| `src/components/sections/POSAnalysisSection.tsx` | CTA inline padding 제거 (기본 md) |

---

## 8. Next Steps

1. [x] Write design document
2. [x] Implementation
3. [ ] Gap analysis (`/pdca analyze ux-ui-polishing`)

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 0.1 | 2026-02-11 | Initial draft | STOREAGENT |
| 1.0 | 2026-02-11 | Implementation complete (5d01c13) | STOREAGENT |
