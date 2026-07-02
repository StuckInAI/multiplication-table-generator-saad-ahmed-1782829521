import { useState } from 'react';
import MultiplicationTable from '@/components/MultiplicationTable';

export default function TablePage() {
  const [rows, setRows] = useState(10);

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center gap-8 px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-pink-800">Multiplication Table</h1>
        <p className="mt-2 text-pink-600">Learn the table of 22 the easy way</p>
      </div>

      <div className="inline-flex rounded-full bg-pink-100 border border-pink-300 p-1">
        <button
          onClick={() => setRows(10)}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
            rows === 10
              ? 'bg-pink-500 text-white shadow'
              : 'text-pink-700 hover:bg-pink-200'
          }`}
        >
          Up to 10
        </button>
        <button
          onClick={() => setRows(20)}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
            rows === 20
              ? 'bg-pink-500 text-white shadow'
              : 'text-pink-700 hover:bg-pink-200'
          }`}
        >
          Up to 20
        </button>
      </div>

      <MultiplicationTable base={22} rows={rows} />
    </div>
  );
}
