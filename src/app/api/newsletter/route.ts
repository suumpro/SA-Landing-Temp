import { NextRequest } from 'next/server';
import {
  getClientIp, isRateLimited, rateLimitResponse,
  sendSlackNotification, slackEscape, koreaTime,
  errorResponse, successResponse,
} from '@/lib/api-utils';

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) return rateLimitResponse();

  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== 'string') {
      return errorResponse('이메일 주소가 필요합니다', 400);
    }

    const trimmedEmail = email.trim();

    if (trimmedEmail.length > 100) {
      return errorResponse('이메일 주소가 너무 깁니다', 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(trimmedEmail)) {
      return errorResponse('올바른 이메일 주소를 입력해주세요', 400);
    }

    await sendSlackNotification(
      `📧 새 뉴스레터 구독 신청!\n\n*이메일:* ${slackEscape(trimmedEmail)}\n*시간:* ${koreaTime()}`,
    );

    return successResponse('구독이 완료되었습니다');
  } catch {
    return errorResponse('서버 오류가 발생했습니다', 500);
  }
}
