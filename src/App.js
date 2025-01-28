// App.js
import React from "react";
import { CounterProvider } from "./context/CounterContext";
import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";

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
