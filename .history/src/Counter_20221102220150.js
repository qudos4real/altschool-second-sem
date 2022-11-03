import React from 'react'
import { useState } from 'react';

const useCounter = (initialValue) => {
    const [count, setCount] = useState(initialValue);
    const increment = () => { setCount(count + 1) };
    const decrement = () => { count > 0 && setCount(count - 1) };
    const reset = () => { setCount(initialValue) };
    const setValue = (value) => { setCount(value) };
    return { count, increment, decrement, reset, setValue };

}


function Counter() {
    const quantity = useCounter(0);
    return (
        <div>
            <h3>
            Quantity: {quantity.count}
            <br />
            <button onClick={quantity.increment}>Increase</button>
            <button onClick={quantity.decrement}>Decrease</button>
            <button onClick={quantity.reset}>Reset</button>
            <br />
            <input type="number" onChange={(e) => quantity.setValue(e.target.value)} />

            </h3>
        </div>
    )
}

export default Counter
