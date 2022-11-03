import React from "react";
import { useCounter } from "../hooks/useCounter";

function Counter() {
  const quantity = useCounter(0);
  return (
    <div>
      <h3>
        Quantity: {quantity.count}
        <br />
        <button onClick={quantity.increment}>Increase</button>
        <button onClick={quantity.decrement}>Decrease</button>
        <button onClick={quantity.reset}>Reset</button>
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
