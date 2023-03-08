import React from "react";
import { FaTimes } from "react-icons/fa";

const TodoItemComp = ({ name, id, getId, removeTodo }) => {
  return (
    <div
      onClick={() => getId(id)}
      className="border border-thirdBg shadow-md shadow-secentBg px-2 py-1 rounded-lg bg-mainBg relative"
    >
      <div
        className="text-textColor hover:text-thirdBg absolute top-2 right-2"
        onClick={() => {
          removeTodo(id);
        }}
      >
        <FaTimes />
      </div>
      <div>{name}</div>
    </div>
  );
};

export default TodoItemComp;
