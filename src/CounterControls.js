// CounterControls.js
import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

const CounterControls = () => {
  // 1. Access increment and decrement functions from the context.
  const { increment, decrement } = useContext(CounterContext);

  return (
    <div>
      <button
        onClick={decrement}
        style={{ padding: "10px 20px", margin: "5px", fontSize: "16px" }}
      >
        Decrement
      </button>
      <button
        onClick={increment}
        style={{ padding: "10px 20px", margin: "5px", fontSize: "16px" }}
      >
        Increment
      </button>
    </div>
  );
};

export default CounterControls;
