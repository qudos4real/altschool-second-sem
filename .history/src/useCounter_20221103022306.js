import { useState } from "react";

export const useCounter = (initialValue) => {
    const [count, setCount] = useState(initialValue);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        count > 0 && setCount(count - 1);
    };
    const reset = () => {
        setCount(initialValue);
    };
    const setValue = (value) => {
        setCount(value);
    };
    return { count, increment, decrement, reset, setValue };
};
