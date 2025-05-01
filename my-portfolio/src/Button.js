import React  from 'react';

export default function Button({ children, className = "", ...rest }) {
    return (
      <button
        className={
          "rounded-xl border border-indigo-400/80 bg-white/70 px-4 py-2 " +
          "backdrop-blur-sm shadow-sm transition hover:shadow-md " +
          "active:scale-95 dark:bg-slate-800/60 dark:border-indigo-500/40 " +
          className
        }
        {...rest}
      >
        {children}
      </button>
    );
  }
  