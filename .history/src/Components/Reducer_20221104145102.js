import React from "react";
import { useReducer } from "react";
import { reducer } from "../hooks/reducer.1";
import "../CSS/Counter.css"

function Reducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="container">
      <h2>Reducer</h2>
      <h3> Quantity: </h3>
      <h3>{state.count}</h3>
      <br />
      <div>
      <button className="btn " onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
      <button className="btn " onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button className="btn " onClick={() => dispatch({ type: "increment" })}>Increase</button>
      </div>
      <br />
      <input
        type="number"
        onChange={(e) => dispatch({ type: "setValue", value: e.target.value })}
      />
    </div>
  );
}

export default Reducer;
