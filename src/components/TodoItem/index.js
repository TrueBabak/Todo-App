import React from "react";

const TodoItemComp = ({ getId, id, name }) => {
  return (
    <div
      onClick={() => getId(id)}
      className="border border-thirdBg shadow-md shadow-secentBg px-2 py-1 rounded-lg bg-mainBg"
    >
      <div>{name}</div>
    </div>
  );
};

export default TodoItemComp;
