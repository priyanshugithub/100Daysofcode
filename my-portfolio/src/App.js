import { useState } from "react";
import CounterButton from "./CounterButton";     // ← new import
import CounterButton2 from "./CounterButton2";     // ← new import
import "./App.css";

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [clicks2, setClicks2] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">👋 Hi, I’m Pri!</h1>
      <p>First React project since my 3-year break 🎉</p>

      <CounterButton
        count={clicks}                     // data ↓
        onIncrement={() => setClicks(c => c + 1)}   // behaviour ↓
        label="You clicked"
      />
      <CounterButton2
        count={clicks2}                     // data ↓
        onIncrement={() => setClicks2(c => c + 1)}   // behaviour ↓
        label="You clicked2"
      />
    </main>
  );
}
