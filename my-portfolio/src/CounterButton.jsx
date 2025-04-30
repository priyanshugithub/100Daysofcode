// CounterButton.jsx
export default function CounterButton({ label, count, onIncrement }) {
    return (
      <button
        onClick={onIncrement}
        className="rounded-full bg-indigo-600 px-4 py-1 text-white
                   text-sm shadow hover:bg-indigo-500 active:scale-95
                   focus:outline-none focus-visible:ring
                   focus-visible:ring-indigo-400/80"
      >
        {count}
      </button>
    );
  }
  
  