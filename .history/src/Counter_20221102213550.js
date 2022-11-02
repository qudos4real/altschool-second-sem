import React from 'react'
import { useState } from 'react';

const useCounter = (initialValue) => {
    const [count, setCount] = useState(initialValue);
    const increment = () => { setCount(count + 1) };
    const decrement = () => { setCount(count - 1) };
    const reset = () => { setCount(initialValue) };
    return { count, increment, decrement, reset };

}


function Counter() {
    const quantity = useCounter(10);
    return (
        <div>
            <h3>
            Quantity: 
            </h3>
        </div>
    )
}

export default Counter
