import React from "react";
import '../CSS/Counter.css';

function Home() {
  return (
    <div className="container">
      <h1>A simple React Counter</h1>
        <h3>Two react counters are created using a custom hook and a useReducer </h3>
        <h3>Both counters have the same functionality</h3>
        <h3>An error checking page is also included which would indicate if an error is thrown</h3>        
    </div>
  );
}

export default Home;
