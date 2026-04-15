"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Confetti from "react-confetti";
import { Ending } from "@/lib/types";
import TypewriterText from "@/components/TypewriterText";

type Props = {
  ending: Ending;
  onRestart: () => void;
  width: number;
  height: number;
};

export default function ResultCard({
  ending,
  onRestart,
  width,
  height,
}: Props) {
  const [showSurprise, setShowSurprise] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const memberText =
    ending.members.length > 0 ? ending.members.join(", ") : "독립형 반응";

  useEffect(() => {
    setShowSurprise(false);
    setShowConfetti(false);

    const revealTimer = setTimeout(() => {
  setShowSurprise(true);
  setShowConfetti(true);
}, 2500);

const confettiTimer = setTimeout(() => {
  setShowConfetti(false);
}, 10000);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(confettiTimer);
    };
  }, [ending]);

  return (
    <>
      {showConfetti && width > 0 && height > 0 && (
  <div className="pointer-events-none fixed inset-0 z-50">
    <Confetti
      width={width}
      height={height}
      recycle={false}
      numberOfPieces={420}
      gravity={0.2}
    />
  </div>
)}

      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45 }}
        className="space-y-4"
      >
        <section className="rounded-4xl border border-white/70 bg-white/95 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <div className="inline-flex rounded-full bg-pink-50 px-3 py-1 text-[11px] font-semibold text-pink-500">
            RESULT
          </div>

          <h2 className="mt-4 text-[30px] font-bold leading-[1.18] tracking-[-0.04em] text-gray-900">
            {ending.title}
          </h2>

          <p className="mt-3 text-[15px] leading-7 text-gray-600">
            {ending.subtitle}
          </p>

          <div className="mt-5 rounded-[28px] bg-linear-to-br from-pink-100 via-rose-50 to-white p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pink-500">
              핵심 요약
            </p>
            <p className="mt-3 text-[16px] font-semibold leading-8 text-gray-900">
              이 유형은 주변 사람의 반응을 한쪽 방향으로만 끌어오기보다,
              관계의 밀도와 표현 방식 자체를 바꾸는 힘이 있는 편입니다.
            </p>
          </div>
        </section>

        <section className="rounded-4xl border border-white/70 bg-white/95 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.06)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
            유형 풀이
          </p>
          <p className="mt-4 whitespace-pre-line text-[15px] leading-8 text-gray-700">
            {ending.analysis}
          </p>
        </section>

        <section className="grid gap-3">
          <div className="rounded-[28px] border border-white/70 bg-white/92 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <p className="text-[12px] font-semibold text-gray-900">
              이런 순간에 더 도드라져요
            </p>
            <p className="mt-2 text-[14px] leading-7 text-gray-600">
              여러 사람 사이에 있을 때의 반응, 가까워질수록 달라지는 태도,
              그리고 사소한 순간에 드러나는 챙김에서 이 유형의 특징이 더 선명하게 나타나요.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/70 bg-white/92 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <p className="text-[12px] font-semibold text-gray-900">
              주변에서는 이렇게 느낄 수 있어요
            </p>
            <p className="mt-2 text-[14px] leading-7 text-gray-600">
              처음엔 가볍게 지나가도 시간이 지나면 더 기억에 남고,
              어느 순간부터는 한 번 더 챙기고 싶거나 반응을 더 크게 보이게 되는 편입니다.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/70 bg-white/92 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <p className="text-[12px] font-semibold text-gray-900">
              관계 패턴 메모
            </p>
            <p className="mt-2 text-[14px] leading-7 text-gray-600">
              넓게 가볍게 소비되는 타입보다는, 반응이 쌓일수록 더 선명해지는 유형에 가깝습니다.
              그래서 시간이 지날수록 관계 안에서 존재감이 커지는 편이에요.
            </p>
          </div>
        </section>

        {!showSurprise && (
          <section className="rounded-[30px] border border-white/70 bg-white/90 p-5 shadow-[0_20px_60px_rgba(244,114,182,0.10)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pink-400">
              Hidden Result
            </p>
            <p className="mt-3 text-[14px] leading-7 text-gray-600">
              숨겨진 결론을 정리하고 있어요.
              <br />
              조금만 기다리면 마지막 카드가 열립니다.
            </p>

            <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-pink-100">
              <div className="h-full w-2/3 animate-pulse rounded-full bg-linear-to-r from-pink-400 to-rose-400" />
            </div>
          </section>
        )}

        {showSurprise && (
          <motion.section
            initial={{ opacity: 0, y: 18, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="rounded-4xl border border-pink-200 bg-linear-to-br from-pink-50 via-rose-50 to-white p-5 shadow-[0_24px_70px_rgba(244,114,182,0.16)]"
          >
            <div className="inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-pink-500 shadow-sm">
              {ending.surpriseTitle}
            </div>

            <TypewriterText
              text={ending.surpriseMessage}
              speed={18}
              start={showSurprise}
              className="mt-4 whitespace-pre-line text-[18px] font-semibold leading-9 tracking-[-0.02em] text-gray-900"
            />
          </motion.section>
        )}

        <section className="rounded-4xl border border-white/70 bg-white/95 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.06)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
            궁합 리포트
          </p>

          <div className="mt-4 space-y-3">
            <div className="rounded-3xl bg-gray-50 p-4">
              <p className="text-[13px] font-semibold text-gray-900">잘 맞는 유형</p>
              <p className="mt-2 text-[14px] leading-7 text-gray-600">
                감정 표현이 과하지 않아도 오래 기억하고, 중요한 순간에 행동으로 보여주는 사람
              </p>
            </div>

            <div className="rounded-3xl bg-gray-50 p-4">
              <p className="text-[13px] font-semibold text-gray-900">의외로 강하게 끌리는 유형</p>
              <p className="mt-2 text-[14px] leading-7 text-gray-600">
                처음엔 무심해 보여도 가까워질수록 반응이 커지고 애정 표현이 진해지는 사람
              </p>
            </div>

            <div className="rounded-3xl bg-gray-50 p-4">
              <p className="text-[13px] font-semibold text-gray-900">가장 강하게 반응한 관계 유형</p>
              <p className="mt-2 text-[16px] font-bold leading-7 text-gray-900">
                {memberText}
              </p>
            </div>
          </div>
        </section>

        <button
          onClick={onRestart}
          className="w-full rounded-3xl bg-gray-900 px-5 py-4 text-[15px] font-semibold text-white shadow-lg shadow-gray-900/10 transition active:scale-[0.98]"
        >
          다시 테스트하기
        </button>
      </motion.div>
    </>
  );
}