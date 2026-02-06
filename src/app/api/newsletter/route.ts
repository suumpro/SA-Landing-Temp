import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: '이메일 주소가 필요합니다' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '올바른 이메일 주소를 입력해주세요' },
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
            text: `📧 새 뉴스레터 구독 신청!\n\n*이메일:* ${email}\n*시간:* ${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}`,
          }),
        });
      } catch (slackError) {
        console.error('Slack 알림 전송 실패:', slackError);
        // Slack 실패해도 구독은 성공으로 처리
      }
    } else {
      // Development mode - just log
      console.log('📧 뉴스레터 구독:', email);
    }

    return NextResponse.json(
      { message: '구독이 완료되었습니다' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter API Error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다' },
      { status: 500 }
    );
  }
}
