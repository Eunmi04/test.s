import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "linear-gradient(180deg, rgb(252, 231, 243), rgb(255, 241, 242), rgb(255, 255, 255))",
          color: "#111827",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#ec4899",
            marginBottom: 24,
          }}
        >
          관계 반응 유형 테스트
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 66,
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.04em",
          }}
        >
          <div style={{ display: "flex" }}>나는 어떤 챙김을</div>
          <div style={{ display: "flex" }}>불러오는 사람일까?</div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 30,
            marginTop: 28,
            color: "#4b5563",
          }}
        >
          뀨
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}