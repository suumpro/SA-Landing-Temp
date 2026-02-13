# Gap Analysis: optimization-stabilization

> **Date**: 2026-02-11
> **Design**: [optimization-stabilization.design.md](../02-design/features/optimization-stabilization.design.md)
> **Match Rate**: 97% (37/38) — FR-01 설계 문서 동기화 후

---

## Summary

| FR | Items | Matched | Rate | Status |
|----|:-----:|:-------:|:----:|--------|
| FR-01 | 12 | 11 | 92% | PASS (설계 동기화 후) |
| FR-02 | 12 | 12 | 100% | PASS |
| FR-03 | 7 | 7 | 100% | PASS |
| FR-04 | 4 | 4 | 100% | PASS |
| FR-05 | 3 | 3 | 100% | PASS |
| **Total** | **38** | **37** | **97%** | **PASS** |

---

## FR-01: Font Loading — 구현 방식 변경

### 설계 vs 구현

| 항목 | 설계 (원본) | 구현 (실제) | 판정 |
|------|------------|------------|------|
| 접근 방식 | `next/font/local` + woff2 | `pretendard` npm + CSS @import | 방식 변경 |
| CDN 링크 제거 | 4개 모두 제거 | 4개 모두 제거 | MATCH |
| CSP 업데이트 | jsdelivr.net 제거 | jsdelivr.net 제거 | MATCH |
| 폰트 렌더링 | 로컬 서빙 | 로컬 서빙 (node_modules) | MATCH |

### 변경 사유

npm 패키지 방식이 더 우수:
- woff2 파일 수동 관리 불필요
- `npm update`로 자동 업데이트
- dynamic-subset 유지 (한글 unicode-range 분할 로딩)
- 빌드 시 자동 번들링

### 남은 Gap (1건)

| 파일 | 설계 | 구현 | 영향 |
|------|------|------|------|
| `globals.css` font-family | `var(--font-pretendard)` 추가 | 기존 `var(--font-sans)` 유지 | 없음 (기능 동일) |

---

## FR-02~05: 완전 일치

- **FR-02**: 4개 섹션 dynamic import + placeholder 높이 모두 일치
- **FR-03**: 3개 컴포넌트 7개 요소 suppressHydrationWarning 적용 완료
- **FR-04**: prevPathname 제거, useEffect 전환 완료
- **FR-05**: 3개 컴포넌트 stable key 적용 완료

---

## Conclusion

모든 설계 목표가 기능적으로 달성됨. FR-01은 의도적 방식 변경으로 설계 문서를 실제 구현에 맞게 동기화 완료.
