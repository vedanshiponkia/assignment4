// App.js
import React from "react";
import { CounterProvider } from "./CounterContext";
import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";

const App = () => {
  return (
    <CounterProvider>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>React Counter with Context</h1>
        <CounterDisplay />
        <CounterControls />
      </div>
    </CounterProvider>
  );
};

export default App;
