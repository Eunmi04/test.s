import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://birthday-test.vercel.app"),
  title: "나는 어떤 챙김을 불러오는 사람일까?",
  description: "윤소담 전용 관계 반응 유형 테스트",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}