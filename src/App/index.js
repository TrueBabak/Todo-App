import React from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const App = () => {
  return (
    <div className="w-full h-screen bg-mainBg flex justify-center items-center">
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default App;
