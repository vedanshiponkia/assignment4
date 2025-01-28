// CounterContext.js
import React, { createContext, useState } from "react";

// 1. Create a Context object.
export const CounterContext = createContext();

// 2. Create a Provider component that wraps the application and provides state.
export const CounterProvider = ({ children }) => {
  // 3. Create a state variable to store the counter value.
  const [counter, setCounter] = useState(0);

  // 4. Define functions to update the counter.
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  // 5. Pass the counter state and functions to the Context provider.
  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};
