import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, contact, storeCount } = body;

    // Validation
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
            text: `🎯 새 상담 신청!\n\n*이름:* ${name}\n*연락처:* ${contact}\n*매장 수:* ${storeCount}\n*시간:* ${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}`,
          }),
        });
      } catch (slackError) {
        console.error('Slack 알림 전송 실패:', slackError);
        // Slack 실패해도 신청은 성공으로 처리
      }
    } else {
      // Development mode - just log
      console.log('🎯 상담 신청:', { name, contact, storeCount });
    }

    return NextResponse.json(
      { message: '상담 신청이 완료되었습니다' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다' },
      { status: 500 }
    );
  }
}
