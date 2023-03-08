import React from "react";
import { TodoItem } from "../DataBase";
import Navbar from "../Navbar";

const TodoList = () => {
  return (
    <div className="w-5/12 bg-secentBg px-6 py-4 rounded-2xl shadow-md shadow-thirdBg text-textColor">
      <Navbar />
      <div>
        {TodoItem.map((item) => {
          return <div>{item.todoName}</div>;
        })}
      </div>
    </div>
  );
};

export default TodoList;
