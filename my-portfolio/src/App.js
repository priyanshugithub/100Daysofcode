import { useState } from "react";
import CounterButton from "./CounterButton";     // ← new import
import "./App.css";

const initialButtons = [
  { id: 1, label: "Alice clicks",   clicks: 0 },
  { id: 2, label: "Bob clicks",     clicks: 0 },
  { id: 3, label: "Charlie clicks", clicks: 0 }
];

export default function App() {
  const [showCounters, setShowCounters] = useState(true);
  const [buttons, setButtons] = useState(initialButtons);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">👋 Hi, I’m Pri!</h1>
      <p>First React project since my 3-year break 🎉</p>

      <label className="flex items-center gap-2 text-lg">
        <input
          type="checkbox"
          checked={showCounters}
          onChange={e => setShowCounters(e.target.checked)}
        />
        Show counters
      </label>

      {showCounters && (
  <ul className="flex flex-col gap-4">
    {buttons.map(btn => (
      <li key={btn.id}>
        <CounterButton
          label={btn.label}
          count={btn.clicks}
          onIncrement={() =>
            setButtons(bs =>
              bs.map(b =>
                b.id === btn.id ? { ...b, clicks: b.clicks + 1 } : b
              )
            )
          }
        />
      </li>
    ))}
  </ul>)}
  <button
    onClick={() =>
      setButtons(bs => bs.map(b => ({ ...b, clicks: 0 })))
    }
    className="rounded-lg border px-4 py-2 hover:bg-gray-100"
  >
    Reset all
  </button>
 

    </main>
  );
}
