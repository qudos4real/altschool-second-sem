import React from 'react'
import { useState } from 'react';

const useCounter = (initialValue) => {
    const [count, setCount] = useState(initialValue)



function Counter() {
    const quantity = useCounter(0);
    return (
        <div>
            <h3>
            Quantity: {quantity.value}
            </h3>
        </div>
    )
}

export default Counter
