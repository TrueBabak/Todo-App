import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { Context } from "../context";

const TodoItemComp = ({ item }) => {
  const { getId, removeTodoHandler } = useContext(Context);
  return (
    <div
      onClick={() => getId(item.id)}
      className="border border-thirdBg shadow-md shadow-secentBg px-2 py-1 rounded-lg bg-mainBg relative"
    >
      <div
        className="text-textColor hover:text-thirdBg absolute top-2 right-2"
        onClick={() => {
          removeTodoHandler(item.id);
        }}
      >
        <FaTimes />
      </div>
      <div className="flex items-center py-3 text-lg">
        <div className="px-1 flex items-center">
          <input type="checkbox" />
        </div>
        <div>{item.todoName}</div>
      </div>
      <div>{item.status}</div>
    </div>
  );
};

export default TodoItemComp;
