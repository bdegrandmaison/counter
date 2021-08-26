import { useState } from "react";

interface UseCounter {
    count: number;
    increment: () => void,
    decrement: () => void,
}

export function useCounter(initialState: number): UseCounter {
    const [count, setCount] = useState(initialState);

    return {
        count,
        increment: () => setCount((count) => count + 1),
        decrement: () => setCount((count) => count - 1)
    };
}