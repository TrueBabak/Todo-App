import React, { useContext } from "react";
import { Context } from "../components/context";

const App = () => {
  const { test } = useContext(Context);
  return (
    <div className="w-full h-screen bg-mainBg flex justify-center items-center">
      <div>App... {test}</div>
    </div>
  );
};

export default App;
