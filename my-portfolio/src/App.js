import { useState } from "react";
import CounterButton from "./CounterButton";     // ← new import
import "./App.css";

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [showCounters, setShowCounters] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">👋 Hi, I’m Pri!</h1>
      <p>First React project since my 3-year break 🎉</p>

      <label className="flex items-center gap-2 text-lg">
        <input
          type="checkbox"
          defaultChecked
          className={showCounters ? "block" : "hidden"}
        />
        Show counters
      </label>

      {showCounters && (
        <>
          <CounterButton
            label="Button A"
            count={clicks}
            onIncrement={() => setClicks((c) => c + 1)}
          />
          <CounterButton
            label="Button B"
            count={clicks}
            onIncrement={() => setClicks((c) => c + 1)}
          />
        </>
      )}
    </main>
  );
}
