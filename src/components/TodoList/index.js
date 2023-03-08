import React from "react";
import { TodoItem } from "../DataBase";

const TodoList = () => {
  return (
    <div className="w-5/12 bg-secentBg px-6 py-4 rounded-2xl shadow-md shadow-thirdBg text-textColor">
      <div>
        {TodoItem.map((item) => {
          return <div>{item.todoName}</div>;
        })}
      </div>
    </div>
  );
};

export default TodoList;
