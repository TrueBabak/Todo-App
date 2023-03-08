import React, { createContext, useState } from "react";
import { TodoItem } from "../DataBase";
const ContextApi = {
  TodoLength: 0,
  test: "",
  setTest: () => {},
  TodoList: "",
  setTodoList: () => {},
};
export const Context = createContext(ContextApi);
const ContextsProvider = ({ children }) => {
  const [test, setTest] = useState("test text");
  const [TodoList, setTodoList] = useState([]);
  let TodoLength = TodoItem.length;
  return (
    <Context.Provider
      value={{
        test,
        setTest,
        TodoList,
        setTodoList,
        TodoLength,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextsProvider;
