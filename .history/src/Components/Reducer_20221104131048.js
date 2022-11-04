import React from "react";
import { useReducer } from "react";
import { reducer } from "../hooks/reducer.1";
import "../CSS/Counter.css"

function Reducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="container">
      <h3> Quantity: {state.count}</h3>
      <br />
      <button className="btn " onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
      <button className="btn " onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button className="btn " onClick={() => dispatch({ type: "increment" })}>Increase</button>
      <br />
      <input
        type="number"
        onChange={(e) => dispatch({ type: "setValue", value: e.target.value })}
      />
    </div>
  );
}

export default Reducer;
