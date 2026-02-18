import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/ui/MobileStickyBar";

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
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "STOREAGENT - 편의점 점주를 위한 AI 브리핑",
    description: "발주 전 3분, 확인하고 가세요.",
    images: ["/twitter-image"],
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
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-primary focus:top-2 focus:left-2 focus:rounded-lg focus:shadow-md"
        >
          본문으로 건너뛰기
        </a>
        <Header />
        <main id="main-content" className="pt-16">
          {children}
        </main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
