# STOREAGENT B2C Landing - Project Guide

## Architecture

Next.js 16 App Router + React 19 + TypeScript + Tailwind CSS 4.
정적 생성(SSG) 기반으로 모든 페이지가 빌드 타임에 생성됨.

## Directory Structure

```
src/
  app/                    # 페이지 라우트 (App Router)
    blog/                 # 블로그 리스팅 + [slug] 상세
    sample/               # 브리핑 샘플 페이지
    api/                  # API Routes (newsletter, contact)
  components/
    blog/                 # ArticleCard, ArticleRenderer, TableOfContents, ReadingProgress
    layout/               # Header, Footer
    sections/             # Hero, SocialProof, UseCase, HowItWorks, Feature, CTA
    ui/                   # NewsletterForm, Accordion, MobileStickyBar
    pricing/              # PricingCard, PlanComparison
  data/
    articles/             # 블로그 콘텐츠 (72개, 파일별 분리)
      weekly/             # 주간 브리핑 (18개)
      season/             # 시즌 가이드 (18개)
      insight/            # 인사이트 (18개)
      tip/                # 점주 노하우 (18개)
      index.ts            # 전체 import + 유틸 함수
      types.ts            # Article, ArticleBlock 타입 정의
  hooks/                  # useScrollAnimation
  lib/                    # pricing-data, faq-data
```

## Coding Conventions

### Tailwind CSS
- 색상: `primary`, `primary-dark`, `primary-lighter` 커스텀 토큰 사용
- 반응형: `sm:` → `md:` → `lg:` 순서, mobile-first
- transition: 구체적 속성 지정 (`transition-colors`, `transition-transform`), `transition-all` 지양

### Components
- 클라이언트 컴포넌트는 `'use client'` 명시, 최소한으로 유지
- `useSearchParams()` 사용 시 반드시 `<Suspense>` 바운더리 필요
- Lucide 아이콘 사용 (React 컴포넌트 import)

### z-index Scale
- Header: `z-50`
- ReadingProgress: `z-[45]`
- Blog sticky tabs: `z-30`
- MobileStickyBar: `z-40`

## Blog System

### Article 추가 방법
1. 해당 카테고리 폴더에 `.ts` 파일 생성 (e.g., `src/data/articles/tip/new-article.ts`)
2. `Article` 타입에 맞춰 데이터 export (`export const newArticle: Article = { ... }`)
3. `src/data/articles/index.ts`에서 import 후 `articles` 배열에 추가

### ArticleBlock 타입
- `heading` — 소제목 (TOC에 자동 반영)
- `paragraph` — 본문 텍스트
- `tip` — 팁 박스 (title + text)
- `stat` — 통계 카드 (연속 stat은 그리드로 자동 그룹핑)
- `checklist` — 체크리스트
- `quote` — 인용문 (text + author)
- `callout` — 콜아웃 (info / warning / success)
- `divider` — 구분선

### icon 매핑
ArticleCard에서 `article.icon` 문자열로 Lucide 아이콘 매핑.
지원 아이콘: `iconMap` in `src/components/blog/ArticleCard.tsx` 참고.

## Build & Deploy

```bash
npm run dev       # 개발 서버 (Turbopack)
npm run build     # 프로덕션 빌드 (72개 블로그 경로 정적 생성)
npm run lint      # ESLint
```

main 브랜치 push → Vercel 자동 배포.
