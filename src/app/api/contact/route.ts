import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiter
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

function escapeSlackText(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: '요청이 너무 많습니다. 잠시 후 다시 시도해주세요.' },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { name, contact, storeCount } = body;

    // Validation with trim and length limits
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { error: '이름을 입력해주세요' },
        { status: 400 }
      );
    }

    if (!contact || typeof contact !== 'string' || contact.trim().length === 0) {
      return NextResponse.json(
        { error: '연락처를 입력해주세요' },
        { status: 400 }
      );
    }

    if (!storeCount || typeof storeCount !== 'string') {
      return NextResponse.json(
        { error: '매장 수를 선택해주세요' },
        { status: 400 }
      );
    }

    const trimmedName = name.trim().slice(0, 50);
    const trimmedContact = contact.trim().slice(0, 50);
    const trimmedStoreCount = storeCount.trim().slice(0, 10);

    // Send to Slack webhook
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

    if (slackWebhookUrl) {
      try {
        await fetch(slackWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: `🎯 새 상담 신청!\n\n*이름:* ${escapeSlackText(trimmedName)}\n*연락처:* ${escapeSlackText(trimmedContact)}\n*매장 수:* ${escapeSlackText(trimmedStoreCount)}\n*시간:* ${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}`,
          }),
        });
      } catch {
        // Slack 알림 실패는 무시 — 사용자 요청은 정상 처리
      }
    }

    return NextResponse.json(
      { message: '상담 신청이 완료되었습니다' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다' },
      { status: 500 }
    );
  }
}
