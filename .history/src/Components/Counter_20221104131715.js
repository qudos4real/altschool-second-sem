import React from "react";
import { useCounter } from "../hooks/useCounter";
import "../CSS/Counter.css"

function Counter() {
  const quantity = useCounter(0);
  return (
    <div className="container">
      <h3>
        Quantity: {quantity.count}
        
        <button className="btn " onClick={quantity.increment}>Increase</button>
        <button className="btn " onClick={quantity.decrement}>Decrease</button>
        <button className="btn " onClick={quantity.reset}>Reset</button>
        <br />
        <input
          type="number"
          onChange={(e) => quantity.setValue(e.target.value)}
        />
      </h3>
    </div>
  );
}

export default Counter;
