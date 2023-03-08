import React from "react";

const TodoItemComp = ({ name, id, getId, removeTodo }) => {
  return (
    <div
      onClick={() => removeTodo(id)}
      className="border border-thirdBg shadow-md shadow-secentBg px-2 py-1 rounded-lg bg-mainBg"
    >
      <div>{name}</div>
    </div>
  );
};

export default TodoItemComp;
