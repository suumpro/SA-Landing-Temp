import { NextRequest } from 'next/server';
import { z } from 'zod';
import {
  getClientIp, isRateLimited, rateLimitResponse,
  sendSlackNotification, slackEscape, koreaTime,
  errorResponse, successResponse,
} from '@/lib/api-utils';

const contactSchema = z.object({
  name: z.string().min(1).max(50),
  contact: z.string().min(1).max(100),
  storeCount: z.string().min(1).max(10),
});

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) return rateLimitResponse();

  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const firstError = result.error.issues[0]?.message ?? '입력값을 확인해주세요';
      return errorResponse(firstError, 400);
    }

    const { name, contact, storeCount } = result.data;

    await sendSlackNotification(
      `🎯 새 상담 신청!\n\n*이름:* ${slackEscape(name)}\n*연락처:* ${slackEscape(contact)}\n*매장 수:* ${slackEscape(storeCount)}\n*시간:* ${koreaTime()}`,
    );

    return successResponse('상담 신청이 완료되었습니다');
  } catch {
    return errorResponse('서버 오류가 발생했습니다', 500);
  }
}
