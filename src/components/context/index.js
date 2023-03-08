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
  const addTodo = (value) => {
    let copyTodoList = [...TodoList];
    let newItem = {
      todoName: value,
      id: TodoList.length + 1,
      key: TodoList.length + 1,
      status: "unCompliteed",
    };
    copyTodoList.push(newItem);
    setTodoList(copyTodoList);
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
        addTodo,
        removeTodo,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextsProvider;
