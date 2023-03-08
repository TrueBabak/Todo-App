import React, { useContext } from "react";
import { Context } from "../components/context";
import TodoList from "../components/TodoList";

const App = () => {
  const { test } = useContext(Context);
  return (
    <div className="w-full h-screen bg-mainBg flex justify-center items-center">
    <TodoList/>
    </div>
  );
};

export default App;
