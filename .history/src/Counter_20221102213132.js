import React from 'react'



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
