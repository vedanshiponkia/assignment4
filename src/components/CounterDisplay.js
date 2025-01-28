// CounterDisplay.js
import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const CounterDisplay = () => {
  // 1. Access the counter value from the context.
  const { counter } = useContext(CounterContext);

  return (
    <div style={{ marginBottom: "20px", fontSize: "24px" }}>
      <strong>Current Count:</strong> {counter}
    </div>
  );
};

export default CounterDisplay;
