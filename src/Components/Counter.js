import React from "react";
import { useCounter } from "../hooks/useCounter";
import "../CSS/Counter.css";

function Counter() {
  const quantity = useCounter(0);
  return (
    <div className="container">
      <h2>Created using a custom hook</h2>
      <h3 className="label ">Current count: </h3>
      <h3 className="value ">{quantity.count} </h3>
      <br />
      <div>
        <button className="btn " onClick={quantity.increment}>
          Increase
        </button>
        <button className="btn " onClick={quantity.decrement}>
          Decrease
        </button>
        <button className="btn " onClick={quantity.reset}>
          Reset
        </button>
      </div>
      <br />
      <input placeholder="Enter a number" className="input "
        type="number"
        onChange={(e) => quantity.setValue(e.target.value)}
      />
    </div>
  );
}

export default Counter;
