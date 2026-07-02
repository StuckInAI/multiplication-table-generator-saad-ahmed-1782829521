type MultiplicationTableProps = {
  base: number;
  rows: number;
};

export default function MultiplicationTable({ base, rows }: MultiplicationTableProps) {
  const lines = Array.from({ length: rows }, (_, i) => i + 1);

  return (
    <div className="w-full max-w-sm rounded-2xl border border-red-300 bg-red-100 shadow-lg shadow-red-200/50 overflow-hidden">
      <h2 className="text-center text-2xl font-bold text-red-700 py-5 border-b border-red-200">
        Table of {base}
      </h2>
      <ul>
        {lines.map((n) => (
          <li
            key={n}
            className={`flex items-center justify-between px-6 py-3 text-lg ${
              n % 2 === 0 ? 'bg-red-50' : 'bg-red-100'
            }`}
          >
            <span className="text-red-900 font-medium">
              {base} × {n}
            </span>
            <span className="text-red-400 font-bold">=</span>
            <span className="text-2xl font-extrabold text-red-600 tabular-nums">
              {base * n}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
