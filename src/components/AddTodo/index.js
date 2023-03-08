import React from "react";

const AddTodo = () => {
  return (
    <div className="absolute top-10 right-10 w-4/12 bg-secentBg rounded-xl px-6 py-4">
      <div className="flex justify-between items-center mb-3">
        Add Todo:
        <input
          type="text"
          className="bg-thirdBg px-2 py-1 rounded-xl w-1/2 placeholder:text-mainBg"
          maxLength="25"
          placeholder="Todo Title.."
        />
      </div>
      <div className="flex justify-between items-center mb-3 placeholder:text-textColor">
        Description:
        <input
          type="text"
          className="bg-thirdBg px-2 py-1 rounded-xl w-1/2 placeholder:text-mainBg"
          maxLength="25"
          placeholder="Todo Description.."
        />
      </div>
    </div>
  );
};

export default AddTodo;
