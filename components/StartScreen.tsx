type Props = {
  onStart: () => void;
};

export default function StartScreen({ onStart }: Props) {
  return (
    <div className="space-y-4">
      <div className="rounded-4xl border border-white/70 bg-white/90 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="mb-4 flex items-center justify-between">
          <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-[11px] font-semibold text-gray-500">
            MOOD TEST
          </div>
          <div className="text-[11px] font-medium text-gray-400">
            모바일 최적화
          </div>
        </div>

        <div className="rounded-[28px] bg-linear-to-br from-pink-200 via-rose-100 to-white p-5">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-pink-600">
            관계 반응 유형 테스트
          </p>

          <h1 className="mt-3 text-[30px] font-bold leading-[1.18] tracking-[-0.04em] text-gray-900">
            나는 어떤방식의 호의와 애정을
            <br />
            끌어당기는 사람일까?
          </h1>

          <p className="mt-4 text-[14px] leading-6 text-gray-700">
            주변 사람들이 나에게 보이는 호의와 애정의 방향을
            <br />
            10문항으로 분석해보는 관계 반응 테스트
          </p>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="rounded-2xl bg-gray-50 p-3 text-center">
            <p className="text-[11px] text-gray-400">문항 수</p>
            <p className="mt-1 text-[15px] font-bold text-gray-900">10문항</p>
          </div>
          <div className="rounded-2xl bg-gray-50 p-3 text-center">
            <p className="text-[11px] text-gray-400">소요 시간</p>
            <p className="mt-1 text-[15px] font-bold text-gray-900">약 1분</p>
          </div>
          <div className="rounded-2xl bg-gray-50 p-3 text-center">
            <p className="text-[11px] text-gray-400">분석 방식</p>
            <p className="mt-1 text-[15px] font-bold text-gray-900">밸런스형</p>
          </div>
        </div>

        <button
          onClick={onStart}
          className="mt-5 w-full rounded-[22px] bg-gray-900 px-5 py-4 text-[15px] font-semibold text-white shadow-lg shadow-gray-900/10 transition active:scale-[0.98]"
        >
          테스트 시작하기
        </button>

        <p className="mt-3 text-center text-[12px] leading-5 text-gray-400">
          저장 없이 바로 참여할 수 있어요
        </p>
      </div>
    </div>
  );
}