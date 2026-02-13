import { NextRequest } from 'next/server';
import { z } from 'zod';
import {
  getClientIp, isRateLimited, rateLimitResponse,
  sendSlackNotification, slackEscape, koreaTime,
  errorResponse, successResponse,
} from '@/lib/api-utils';

const newsletterSchema = z.object({
  email: z
    .string()
    .email('올바른 이메일 주소를 입력해주세요')
    .max(100, '이메일 주소가 너무 깁니다'),
});

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) return rateLimitResponse();

  let body;
  try {
    body = await request.json();
  } catch {
    return errorResponse('잘못된 요청 형식입니다', 400);
  }

  try {
    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      const firstError = result.error.issues[0]?.message ?? '입력값을 확인해주세요';
      return errorResponse(firstError, 400);
    }

    const { email } = result.data;

    await sendSlackNotification(
      `📧 새 뉴스레터 구독 신청!\n\n*이메일:* ${slackEscape(email)}\n*시간:* ${koreaTime()}`,
    );

    return successResponse('구독이 완료되었습니다');
  } catch (err) {
    console.error('[API] newsletter error:', err);
    return errorResponse('서버 오류가 발생했습니다', 500);
  }
}
