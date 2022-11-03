import React from "react";
import { useReducer } from "react";
import { reducer } from "../hooks/reducer.1";

function Reducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <h3> Quantity: {state.count}</h3>
      <br />
      <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <br />
      <input
        type="number"
        onChange={(e) => dispatch({ type: "setValue", value: e.target.value })}
      />
    </>
  );
}

export default Reducer;
