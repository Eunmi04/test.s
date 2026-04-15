type Props = {
  current: number;
  total: number;
};

export default function ProgressBar({ current, total }: Props) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="mb-4 rounded-3xl border border-white/70 bg-white/80 p-4 shadow-[0_12px_40px_rgba(15,23,42,0.05)] backdrop-blur">
      <div className="mb-2 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
            Progress
          </p>
          <p className="mt-1 text-[14px] font-semibold text-gray-900">
            {current} / {total} 문항 진행 중
          </p>
        </div>
        <div className="rounded-full bg-pink-50 px-3 py-1 text-[12px] font-semibold text-pink-500">
          {percentage}%
        </div>
      </div>

      <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-linear-to-r from-pink-400 to-rose-400 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}