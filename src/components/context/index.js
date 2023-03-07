import React, { createContext, useState } from "react";
const ContextApi = {
  test: "",
  setTest: () => {},
};
export const Context = createContext(ContextApi);
const ContextsProvider = ({ children }) => {
  const [test, setTest] = useState("test text");
  return (
    <Context.Provider
      value={{
        test,
        setTest,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextsProvider;
