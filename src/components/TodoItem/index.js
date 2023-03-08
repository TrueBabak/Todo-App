import React from "react";

const TodoItemComp = ({ item }) => {
  return (
    <div className="border">
      <div>{item.todoName}</div>
    </div>
  );
};

export default TodoItemComp;
