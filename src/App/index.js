import React from "react";
import TodoList from "../components/TodoList";

const App = () => {
  return (
    <div className="w-full h-screen bg-mainBg flex justify-center items-center">
      <TodoList />
    </div>
  );
};

export default App;
