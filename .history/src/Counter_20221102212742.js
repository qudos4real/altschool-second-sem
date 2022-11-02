import React from 'react'



function Counter() {

    const quantity = useCounter(0, 1);
    return (
        <div>
            <h1>A simple Counter</h1>
            Quantity: {quantity}
        </div>
    )
}

export default Counter
