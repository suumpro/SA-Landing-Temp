# STOREAGENT B2C Landing

편의점 점주를 위한 AI 모닝 브리핑 서비스 랜딩페이지.

## Tech Stack

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS 4 + Pretendard 폰트
- **Form:** React Hook Form + Zod (스키마 검증)
- **Icons:** Lucide React
- **Deploy:** Vercel (자동 배포)

## Getting Started

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인.

## Key Features

### Landing Page
- Hero + Social Proof + UseCase + HowItWorks + Feature + CTA 섹션
- 가격 비교표 (Free / Standard / Premium)
- 뉴스레터 구독 + 상담 문의 폼 (Slack 웹훅 연동)
- 7일 브리핑 샘플 미리보기 (`/sample`)
- 모바일 하단 Sticky CTA 바

### Blog (`/blog`)
- **72개 콘텐츠** — 4개 카테고리 x 18개씩
  - 주간 브리핑: 매주 발주/매출 데이터 분석
  - 시즌 가이드: 계절/이벤트별 운영 전략
  - 인사이트: 데이터 기반 소비 트렌드
  - 점주 노하우: 실전 운영 팁
- 검색 (제목/태그, 300ms debounce)
- 카테고리 탭 필터 + 태그 필터 (인기 태그 12개)
- 페이지네이션 (12개/페이지) + 정렬 (최신/오래된순)
- 상세 페이지: 읽기 진행률 바, 목차(TOC) 사이드바, heading 앵커 링크

## Project Structure

```
src/
  app/
    blog/              # 블로그 리스팅 + [slug] 상세
    sample/            # 브리핑 샘플
    api/               # POST /api/newsletter, POST /api/contact
    (pages)/           # /, /pricing, /how-it-works, /faq, /contact, /thank-you
  components/
    blog/              # ArticleCard, ArticleRenderer, TableOfContents, ReadingProgress
    layout/            # Header, Footer
    sections/          # Hero, SocialProof, UseCase, HowItWorks, Feature, CTA
    ui/                # NewsletterForm, Accordion, MobileStickyBar
    pricing/           # PricingCard, PlanComparison
  data/
    articles/          # 블로그 콘텐츠 (72개)
      weekly/          #   주간 브리핑 (18개)
      season/          #   시즌 가이드 (18개)
      insight/         #   인사이트 (18개)
      tip/             #   점주 노하우 (18개)
      index.ts         #   import hub + 유틸 함수
      types.ts         #   Article, ArticleBlock 타입
  hooks/               # useScrollAnimation
  lib/                 # pricing-data, faq-data
```

## Environment Variables

`.env.example` 참고.

| 변수 | 필수 | 설명 |
|------|------|------|
| `SLACK_WEBHOOK_URL` | 선택 | 뉴스레터/상담 신청 Slack 알림 |

## Scripts

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 (Turbopack) |
| `npm run build` | 프로덕션 빌드 (72개 블로그 경로 SSG) |
| `npm run start` | 프로덕션 서버 |
| `npm run lint` | ESLint 검사 |

## Deployment

main 브랜치에 push 시 Vercel에서 자동 배포.
