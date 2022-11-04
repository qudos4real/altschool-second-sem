import React from "react";
import { useReducer } from "react";
import { reducer } from "../hooks/reducer.1";
import "../CSS/Counter.css";

function Reducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="container">
      <h2>Created using a useReducer</h2>
      <h3 className="label "> Quantity: </h3>
      <h3 className="value ">{state.count}</h3>
      <br />
      <div>
        <button
          className="btn "
          onClick={() => dispatch({ type: "increment" })}
        >
          Increase
        </button>
        <button
          className="btn "
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrease
        </button>
        <button className="btn " onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
      </div>
      <br />
      <input
        type="number"
        placeholder="Enter a number"
        className="input "
        onMouseLeave={(e) =>
          dispatch({ type: "setValue", value: e.target.value })
        }
      />
    </div>
  );
}

export default Reducer;
