"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import StartScreen from "@/components/StartScreen";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import ResultCard from "@/components/ResultCard";
import { questions } from "@/data/questions";
import { endings } from "@/data/endings";
import { EndingKey } from "@/lib/types";

type Stage = "start" | "question" | "result";

const initialScores: Record<EndingKey, number> = {
  all: 0,
  me: 0,
  friendA: 0,
  friendB: 0,
  friendC: 0,
  self: 0,
};

const priority: EndingKey[] = [
  "all",
  "me",
  "friendB",
  "friendC",
  "friendA",
  "self",
];

export default function HomeClient() {
  const [stage, setStage] = useState<Stage>("start");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<Record<EndingKey, number>>(initialScores);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    const updateSize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (stage === "question" && currentIndex >= questions.length) {
      setStage("result");
    }
  }, [stage, currentIndex]);

  const resultKey = useMemo(() => {
    const sorted = priority
      .map((key) => [key, scores[key]] as const)
      .sort((a, b) => b[1] - a[1]);

    return sorted[0]?.[0] ?? "self";
  }, [scores]);

  const handleStart = () => {
    setStage("question");
    setCurrentIndex(0);
    setScores({ ...initialScores });
  };

  const handleSelect = (optionIndex: number) => {
    if (!currentQuestion) return;

    const selected = currentQuestion.options[optionIndex];
    if (!selected) return;

    setScores((prev) => {
      const next = { ...prev };

      for (const key in selected.scores) {
        const typedKey = key as EndingKey;
        next[typedKey] += selected.scores[typedKey] ?? 0;
      }

      return next;
    });

    const isLast = currentIndex >= questions.length - 1;

    if (isLast) {
      setStage("result");
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleRestart = () => {
    setStage("start");
    setCurrentIndex(0);
    setScores({ ...initialScores });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fff8fb] px-4 py-5">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,207,232,0.5),transparent_35%),radial-gradient(circle_at_bottom,rgba(254,205,211,0.35),transparent_30%)]" />
      </div>

      <div className="mx-auto max-w-107.5">
        <div className="mb-4 px-1">
          <p className="text-[12px] font-semibold tracking-[0.18em] text-gray-400">
            PERSONALITY TEST
          </p>
        </div>

        <AnimatePresence mode="wait">
          {stage === "start" && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
            >
              <StartScreen onStart={handleStart} />
            </motion.div>
          )}

          {stage === "question" && currentQuestion && (
            <motion.div
              key={`question-${currentIndex}`}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.28 }}
            >
              <ProgressBar current={currentIndex + 1} total={questions.length} />
              <QuestionCard question={currentQuestion} onSelect={handleSelect} />
            </motion.div>
          )}

          {stage === "result" && (
            <motion.div
              key={`result-${resultKey}`}
              initial={{ opacity: 0, y: 24, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ResultCard
                ending={endings[resultKey]}
                onRestart={handleRestart}
                width={viewport.width}
                height={viewport.height}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}