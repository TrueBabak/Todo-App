import React, { useContext } from "react";
import { Context } from "../context";
import Navbar from "../Navbar";
import TodoItemComp from "../TodoItem";

const TodoList = () => {
  const { TodoList, getId, removeTodo } = useContext(Context);
  return (
    <div className="w-6/12 bg-secentBg px-6 py-4 rounded-2xl shadow-md shadow-thirdBg text-textColor">
      <Navbar />
      <div className="grid grid-cols-2 gap-5">
        {TodoList.map((item) => {
          return (
            <TodoItemComp
              getId={getId}
              removeTodo={removeTodo}
              id={item.id}
              status={item.status}
              name={item.todoName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
