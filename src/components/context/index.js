import React, { createContext, useState } from "react";
import { TodoItem } from "../DataBase";
import { ContextApi } from "./ContextData";

export const Context = createContext(ContextApi);
const ContextsProvider = ({ children }) => {
  const [TodoList, setTodoList] = useState(TodoItem);
  const [inputValue, setInputValue] = useState("");
  let TodoLength = TodoList.length;

  // get id function
  const getId = (id) => {
    console.log(id);
  };

  // Add Todo function
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
    setInputValue("");
  };

  // remove todo function
  const removeTodoHandler = (id) => {
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
        removeTodoHandler,
        inputValue,
        setInputValue,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextsProvider;
