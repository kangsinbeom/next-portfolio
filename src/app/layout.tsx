import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "강신범 포트폴리오",
    template: "강신범 포트폴리오 | %s",
  },
  description: "프론트엔드 개발자 강신범의 포트폴리오입니다.",
  keywords: [
    "포트폴리오",
    "개발자",
    "넥스트",
    "next.js",
    "portfolio",
    "developer",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
