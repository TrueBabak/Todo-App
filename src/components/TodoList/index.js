import React from "react";
import { TodoItem } from "../DataBase";
import Navbar from "../Navbar";
import TodoItemComp from "../TodoItem";

const TodoList = () => {
  return (
    <div className="w-6/12 bg-secentBg px-6 py-4 rounded-2xl shadow-md shadow-thirdBg text-textColor">
      <Navbar />
      <div className="grid grid-cols-2 gap-5">
        {TodoItem.map((item) => {
          return <TodoItemComp item={item} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
