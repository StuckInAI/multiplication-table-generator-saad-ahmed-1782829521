type MultiplicationTableProps = {
  base: number;
  rows: number;
};

export default function MultiplicationTable({ base, rows }: MultiplicationTableProps) {
  const lines = Array.from({ length: rows }, (_, i) => i + 1);

  return (
    <div className="w-full max-w-sm rounded-2xl border border-pink-300 bg-pink-100 shadow-lg shadow-pink-200/50 overflow-hidden">
      <h2 className="text-center text-2xl font-bold text-pink-700 py-5 border-b border-pink-200">
        Table of {base}
      </h2>
      <ul>
        {lines.map((n) => (
          <li
            key={n}
            className={`flex items-center justify-between px-6 py-3 text-lg ${
              n % 2 === 0 ? 'bg-pink-50' : 'bg-pink-100'
            }`}
          >
            <span className="text-pink-900 font-medium">
              {base} × {n}
            </span>
            <span className="text-pink-400 font-bold">=</span>
            <span className="text-2xl font-extrabold text-pink-600 tabular-nums">
              {base * n}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
