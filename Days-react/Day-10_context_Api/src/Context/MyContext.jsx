
import { createContext, useState } from "react";

// Step 1: Create Context
export const MyStore = createContext();

// Step 2: Create Context Provider
export const ContextProvider = ({ children }) => {

  // Step 3: Create State
  const [ContextData, setContextData] = useState(
    "i am react context"
  );

  // Step 4: Provide Data
  return (
    <MyStore.Provider value={{ ContextData, setContextData }}>
      {children}
    </MyStore.Provider>
  );
};
