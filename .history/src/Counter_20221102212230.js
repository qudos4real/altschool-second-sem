import React from 'react'
import UseCounter from './useCounter'


function Counter() {

    const quantity = UseCounter(0, 1);
    return (
        <div>
            <h1>A simple Counter</h1>
            Quantity: {quantity}
        </div>
    )
}

export default Counter
