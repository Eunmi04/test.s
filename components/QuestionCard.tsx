import { Question } from "@/lib/types";

type Props = {
  question: Question;
  onSelect: (optionIndex: number) => void;
};

export default function QuestionCard({ question, onSelect }: Props) {
  return (
    <div className="rounded-4xl border border-white/70 bg-white/95 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <div className="inline-flex rounded-full bg-pink-50 px-3 py-1 text-[11px] font-semibold text-pink-500">
          QUESTION {question.id}
        </div>
        <div className="text-[12px] font-medium text-gray-400">
          하나만 선택
        </div>
      </div>

      <h2 className="text-[25px] font-bold leading-[1.34] tracking-[-0.03em] text-gray-900">
        {question.text}
      </h2>

      <p className="mt-3 text-[14px] leading-6 text-gray-500">
        더 끌리는 쪽을 직감대로 골라주세요
      </p>

      <div className="mt-6 grid gap-3">
        {question.options.map((option, index) => {
          const [title, ...rest] = option.label.split(". ");
          const body = rest.join(". ");

          return (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className="rounded-[26px] border border-gray-200 bg-white px-5 py-5 text-left shadow-sm transition hover:border-pink-300 hover:bg-pink-50 active:scale-[0.99]"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-900 text-[13px] font-bold text-white">
                  {title}
                </div>
                <div>
                  <p className="text-[15px] font-semibold leading-7 text-gray-900">
                    {body}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}