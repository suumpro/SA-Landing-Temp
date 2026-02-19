# STOREAGENT B2C Landing - Project Guide

## Architecture

Next.js 16 App Router + React 19 + TypeScript + Tailwind CSS 4.
정적 생성(SSG) 기반으로 모든 페이지가 빌드 타임에 생성됨.
콘텐츠 관리: Velite (MDX → JSON) + Decap CMS (비개발자 편집 UI).

## Directory Structure

```
content/
  articles/              # 블로그 콘텐츠 MDX 파일 (72개)
    weekly/              # 주간 브리핑 (18개)
    season/              # 시즌 가이드 (18개)
    insight/             # 인사이트 (18개)
    tip/                 # 점주 노하우 (18개)
public/
  admin/                 # Decap CMS (index.html + config.yml)
src/
  app/                   # 페이지 라우트 (App Router)
    blog/                # 블로그 리스팅 + [slug] 상세
    sample/              # 브리핑 샘플 페이지
    api/                 # API Routes (newsletter, contact)
  components/
    blog/                # ArticleCard, ArticleRenderer, mdx-components, TableOfContents, ReadingProgress
    layout/              # Header, Footer
    sections/            # Hero, SocialProof, UseCase, HowItWorks, Feature, CTA
    ui/                  # NewsletterForm, Accordion, MobileStickyBar
    pricing/             # PricingCard, PlanComparison
  data/
    articles/
      types.ts           # Article, ArticleMeta, categoryMeta 타입 정의
  hooks/                 # useScrollAnimation
  lib/
    articles.ts          # 서버 컴포넌트용 (body 포함)
    article-metadata.ts  # 클라이언트 컴포넌트용 (body 제외)
    slug.ts              # 공유 toSlug 유틸
    pricing-data.ts
    faq-data.ts
.velite/                 # Velite 빌드 출력 (자동 생성, .gitignore)
velite.config.ts         # Velite 스키마 설정
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

## Blog System (MDX + Velite)

### Article 추가 방법
1. `content/articles/{category}/` 폴더에 `.mdx` 파일 생성
2. frontmatter에 메타데이터 작성 (slug, title, excerpt, category, date, readTime, tags, icon)
3. 본문에 Markdown + 커스텀 MDX 컴포넌트 사용
4. Velite가 자동으로 빌드 타임에 JSON으로 변환

### 비개발자 콘텐츠 관리
- `/admin` 접속 → Decap CMS GUI로 아티클 작성/편집
- 저장 시 자동 GitHub PR 생성 (editorial workflow)
- PR 머지 → Vercel 자동 배포

### MDX 커스텀 컴포넌트 (본문에서 사용 가능)
- `## 소제목` — h2 헤딩 (TOC에 자동 반영)
- `<Stat label="..." value="..." change="..." />` — 통계 카드
- `<StatGroup>...</StatGroup>` — 여러 Stat을 그리드로 그룹핑
- `<Tip title="...">텍스트</Tip>` — 팁 박스
- `<Checklist>\n- 항목1\n- 항목2\n</Checklist>` — 체크리스트
- `<Quote author="...">텍스트</Quote>` — 인용문
- `<Callout variant="info|warning|success">텍스트</Callout>` — 콜아웃
- `---` — 구분선

### 데이터 레이어
- 서버 컴포넌트: `import { getAllArticles } from '@/lib/articles'` (body 포함)
- 클라이언트 컴포넌트: `import { getAllArticlesMeta } from '@/lib/article-metadata'` (body 제외)

### icon 매핑
ArticleCard에서 `article.icon` 문자열로 Lucide 아이콘 매핑.
지원 아이콘: `iconMap` in `src/components/blog/ArticleCard.tsx` 참고.

## Build & Deploy

```bash
npm run dev       # 개발 서버 (Turbopack) — Velite watch 모드 자동 시작
npm run build     # 프로덕션 빌드 (Velite 빌드 + 72개 블로그 경로 정적 생성)
npm run lint      # ESLint
```

main 브랜치 push → Vercel 자동 배포.
