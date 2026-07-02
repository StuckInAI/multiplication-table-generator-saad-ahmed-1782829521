type MultiplicationTableProps = {
  base: number;
  rows: number;
};

export default function MultiplicationTable({ base, rows }: MultiplicationTableProps) {
  const lines = Array.from({ length: rows }, (_, i) => i + 1);

  return (
    <div className="w-full max-w-sm rounded-2xl border border-yellow-300 bg-yellow-100 shadow-lg shadow-yellow-200/50 overflow-hidden">
      <h2 className="text-center text-2xl font-bold text-yellow-700 py-5 border-b border-yellow-200">
        Table of {base}
      </h2>
      <ul>
        {lines.map((n) => (
          <li
            key={n}
            className={`flex items-center justify-between px-6 py-3 text-lg ${
              n % 2 === 0 ? 'bg-yellow-50' : 'bg-yellow-100'
            }`}
          >
            <span className="text-yellow-900 font-medium">
              {base} × {n}
            </span>
            <span className="text-yellow-400 font-bold">=</span>
            <span className="text-2xl font-extrabold text-yellow-600 tabular-nums">
              {base * n}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
