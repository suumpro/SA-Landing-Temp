import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://storeagent.kr"),
  title: "STOREAGENT - 편의점 점주를 위한 AI 브리핑",
  description: "발주 전 3분, 확인하고 가세요. 날씨, 이벤트, 오늘 체크할 것들을 매일 아침 정리해 드립니다. 본사 연동 없이 바로 시작하세요.",
  keywords: ["편의점", "점주", "모닝브리핑", "AI", "발주", "스토어에이전트"],
  authors: [{ name: "STOREAGENT" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
  openGraph: {
    title: "STOREAGENT - 편의점 점주를 위한 AI 브리핑",
    description: "발주 전 3분, 확인하고 가세요. 날씨, 이벤트, 오늘 체크할 것들을 매일 아침 정리해 드립니다.",
    url: "https://storeagent.kr",
    siteName: "STOREAGENT",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "STOREAGENT - 편의점 점주를 위한 AI 브리핑",
    description: "발주 전 3분, 확인하고 가세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#1E88E5",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "STOREAGENT",
  url: "https://storeagent.kr",
  description: "편의점 점주를 위한 AI 모닝 브리핑 서비스",
  publisher: {
    "@type": "Organization",
    name: "STOREAGENT",
    url: "https://storeagent.kr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <style dangerouslySetInnerHTML={{ __html: `@font-face{font-family:'Pretendard Variable';font-display:swap;}` }} />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
