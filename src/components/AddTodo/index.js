import React, { useContext } from "react";
import { Context } from "../context";

const AddTodo = () => {
  const { addTodo, inputValue, setInputValue } = useContext(Context);
  return (
    <div className="bg-secentBg rounded-xl px-6 py-4">
      <div className="flex justify-center items-center mb-3">
        <input
          type="text"
          className="bg-thirdBg px-2 py-1 rounded-xl w-1/2 placeholder:text-mainBg mx-2 focus:outline-double"
          maxLength="25"
          placeholder="Todo Title.."
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter" || e.code === "NumpadEnter") {
              addTodo(inputValue);
            }
          }}
        />
        <button
          className="px-2 py-1 bg-mainBg text-thirdBg rounded-xl border border-thirdBg shadow-md shadow-thirdBg hover:shadow-none transition-all duration-200"
          onClick={() => {
            addTodo(inputValue);
          }}
        >
          AddTodo
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
