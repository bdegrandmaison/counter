import { useState } from "react";

interface UseCounter {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export function useCounter(): UseCounter {
  const [count, setCount] = useState(0);

  return {
    count,
    increment: () => setCount((count) => count + 1),
    decrement: () => setCount((count) => count - 1),
  };
}
