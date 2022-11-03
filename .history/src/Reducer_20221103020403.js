import React from 'react'
import { useReducer } from 'react';


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

 
 
 function Reducer() {
        const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <>
            <h3> Quantity: {state} </h3>
            <button onClick={() => dispatch({ type: 'increment' })}>Increase</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrease</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

        </>
    )
 }
 
 export default Reducer
 