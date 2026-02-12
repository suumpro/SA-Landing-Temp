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
    const { name, contact, storeCount } = body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return errorResponse('이름을 입력해주세요', 400);
    }
    if (!contact || typeof contact !== 'string' || contact.trim().length === 0) {
      return errorResponse('연락처를 입력해주세요', 400);
    }
    if (!storeCount || typeof storeCount !== 'string') {
      return errorResponse('매장 수를 선택해주세요', 400);
    }

    const trimmedName = name.trim().slice(0, 50);
    const trimmedContact = contact.trim().slice(0, 50);
    const trimmedStoreCount = storeCount.trim().slice(0, 10);

    await sendSlackNotification(
      `🎯 새 상담 신청!\n\n*이름:* ${slackEscape(trimmedName)}\n*연락처:* ${slackEscape(trimmedContact)}\n*매장 수:* ${slackEscape(trimmedStoreCount)}\n*시간:* ${koreaTime()}`,
    );

    return successResponse('상담 신청이 완료되었습니다');
  } catch {
    return errorResponse('서버 오류가 발생했습니다', 500);
  }
}
