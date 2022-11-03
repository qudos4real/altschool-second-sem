import React from 'react'
import { useState } from 'react';

// const useCounter = (initialValue) => {
//     const [count, setCount] = useState(initialValue);
//     const increment = () => { setCount(count + 1) };
//     const decrement = () => { count > 0 && setCount(count - 1) };
//     const reset = () => { setCount(initialValue) };
//     const setValue = (value) => { setCount(value) };
//     return { count, increment, decrement, reset, setValue };

// }

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            return state;
    }
}

function Counter() {
    // const quantity = useCounter(0);
    const [state, dispatch] = React.useReducer(reducer, { count: 0 });
    return (
        <div>
            <h2>Counter</h2>
            <p>Count: {state.count}</p>
            <h3>
            {/* Quantity: {quantity.count} */}
            Quantity: {state}
            <br />
            <button onClick={() => dispatch({type: "increment"})}>Increase</button>
            <button onClick={() => dispatch({type: "decrement"})}>Decrease</button>
            <button onClick>Decrease</button>
            <button onClick>Reset</button>
            <br />
            {/* <input type="number" onChange={(e) => quantity.setValue(e.target.value)} /> */}


            </h3>
        </div>
    )
}

export default Counter
