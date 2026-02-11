# STOREAGENT B2C Landing

편의점 점주를 위한 AI 모닝 브리핑 서비스 랜딩페이지.

## Tech Stack

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS 4 + Pretendard 폰트
- **Form:** React Hook Form + Zod (스키마 검증)
- **Deploy:** Vercel (자동 배포)

## Getting Started

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인.

## Project Structure

```
src/
  app/              # 페이지 라우트
    (pages)         #   /, /pricing, /how-it-works, /faq, /contact, /thank-you
    api/            #   POST /api/newsletter, POST /api/contact
  components/
    layout/         # Header, Footer
    sections/       # Hero, SocialProof, UseCase, HowItWorks, Feature, CTA
    ui/             # NewsletterForm, Accordion
    pricing/        # PricingCard, PlanComparison
    MockupImage.tsx # 브리핑 목업 비주얼
  hooks/            # useScrollAnimation
  lib/              # pricing-data, faq-data
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
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 프로덕션 서버 |
| `npm run lint` | ESLint 검사 |

## Deployment

main 브랜치에 push 시 Vercel에서 자동 배포.
