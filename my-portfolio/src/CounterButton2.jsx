export default function CounterButton2({ count, onIncrement, label }) {
    return (
      <button
        onClick={onIncrement}
        className="rounded-lg border px-4 py-2 text-lg hover:bg-gray-100"
      >
        {label}: {count}
      </button>
    );
  }