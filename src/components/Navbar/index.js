import React, { useContext } from "react";
import { Context } from "../context";

const Navbar = () => {
  const { TodoLength } = useContext(Context);
  return (
    <div>
      <div className="w-full flex justify-center items-center border-b border-thirdBg pb-3 mb-2">
        <div>Todo Count:</div>
        <div className="bg-textColor text-mainBg rounded-full w-5 h-5 flex justify-center items-center mx-2">
          {TodoLength}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
