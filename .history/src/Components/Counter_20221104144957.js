import React from "react";
import { useCounter } from "../hooks/useCounter";
import "../CSS/Counter.css"

function Counter() {
  const quantity = useCounter(0);
  return (
    <div className="container">
      <h3>
        Quantity: {quantity.count} </h3>
        <br />
        <div>
        <button className="btn " onClick={quantity.increment}>Increase</button>
        <button className="btn " onClick={quantity.decrement}>Decrease</button>
        <button className="btn " onClick={quantity.reset}>Reset</button>
        </div>
        <br />
        <input
          type="number"
          onChange={(e) => quantity.setValue(e.target.value)}
        />
      
    </div>
  );
}

export default Counter;
