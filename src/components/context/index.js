import React, { createContext, useState } from "react";
const ContextApi = {
  test: "",
  setTest: () => {},
  TodoList: "",
  setTodoList: () => {},
};
export const Context = createContext(ContextApi);
const ContextsProvider = ({ children }) => {
  const [test, setTest] = useState("test text");
  const [TodoList, setTodoList] = useState([]);
  return (
    <Context.Provider
      value={{
        test,
        setTest,
        TodoList,
        setTodoList,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextsProvider;
