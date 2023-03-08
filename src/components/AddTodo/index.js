import React, { useContext, useState } from "react";
import { Context } from "../context";

const AddTodo = () => {
  const { addTodo } = useContext(Context);
  const [value, setValue] = useState("");
  return (
    <div className="bg-secentBg rounded-xl px-6 py-4">
      <div className="flex justify-center items-center mb-3">
        Add Todo:
        <input
          type="text"
          className="bg-thirdBg px-2 py-1 rounded-xl w-1/2 placeholder:text-mainBg mx-2"
          maxLength="25"
          placeholder="Todo Title.."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            addTodo(value);
          }}
        >
          AddTodo
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
