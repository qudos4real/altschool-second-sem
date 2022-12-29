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
        // set the count to 0 if the value is empty or less than 0
        setCount(value <= 0 ? 0 : value === "" ? 0 : value);
            };

    return { count, increment, decrement, reset, setValue, };
};
