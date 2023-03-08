import React, { createContext, useState } from "react";
import { TodoItem } from "../DataBase";
const ContextApi = {
  TodoLength: 0,
  TodoList: "",
  setTodoList: () => {},
};
export const Context = createContext(ContextApi);
const ContextsProvider = ({ children }) => {
  const [TodoList, setTodoList] = useState(TodoItem);
  let TodoLength = TodoList.length;

  // get id function
  const getId = (id) => {
    console.log(id);
  };
  const removeTodo = (id) => {
    const CopyTodo = [...TodoList];
    const filteredTodo = CopyTodo.filter((p) => p.id !== id);
    setTodoList(filteredTodo);
  };
  return (
    <Context.Provider
      value={{
        TodoList,
        setTodoList,
        TodoLength,
        getId,
        removeTodo,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextsProvider;
