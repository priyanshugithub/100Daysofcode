import { React, useState } from "react";
//import CounterButton from "./CounterButton";     // ← new import
//import "./App.css";
import Button from "./Button";
import { RefreshCcw } from "lucide-react";

// const initialButtons = [
//   { id: 1, label: "Alice clicks",   clicks: 0 },
//   { id: 2, label: "Bob clicks",     clicks: 0 },
//   { id: 3, label: "Charlie clicks", clicks: 0 }
// ];

export default function App() {
  const [buttons, setButtons] = useState([
    { id: 1, label: "Alice clicks", clicks: 0 },
    { id: 2, label: "Bob clicks",   clicks: 0 }
  ]);
  const [newLabel, setNewLabel] = useState("");

  return (
    // App.jsx (outer <main>)
<main className="min-h-screen bg-gradient-to-br from-indigo-50 to-white
                flex flex-col items-center px-4 py-10 text-slate-800
                dark:from-slate-900 dark:to-slate-800 dark:text-slate-100">

      <h1 className="text-3xl font-bold bg-amber-300">Tailwind live!</h1>
      <p>First React project since my 3-year break 🎉</p>

      {/* —— Add-counter form —— */}
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!newLabel.trim()) return;
          setButtons(bs => [
            ...bs,
            { id: Date.now(), label: newLabel.trim(), clicks: 0 }
          ]);
          setNewLabel("");
        }}
        className="mt-8 flex w-full max-w-sm gap-2"
      >
        <input
          type="text"
          placeholder="New counter label"
          value={newLabel}
          onChange={e => setNewLabel(e.target.value)}
          className="flex-1 rounded-xl border border-slate-300/60 bg-white/70
          px-3 py-2 backdrop-blur-sm shadow-sm focus:border-indigo-400
          focus:ring-2 focus:ring-indigo-100 dark:bg-slate-800/60
          dark:border-slate-600/40 dark:focus:border-indigo-500"
        />
        <button className="rounded border px-3 py-1 hover:bg-gray-100">
          Add counter
        </button>
      </form>

      {/* —— Counter list —— */}
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
  {buttons.map(btn => (
    <li
      key={btn.id}
      className="rounded-2xl bg-white/70 p-4 shadow-sm backdrop-blur-sm
                 flex items-center justify-between transition
                 hover:shadow-lg dark:bg-slate-800/60"
    >
      <span className="font-medium">{btn.label}</span>
            <Button
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
      </ul>

    <Button
      onClick={() =>
      setButtons(bs => bs.map(b => ({ ...b, clicks: 0 })))
    }>
      <RefreshCcw size={16} className="mr-2" />
      Reset all
    </Button>
 

    </main>
  );
}
