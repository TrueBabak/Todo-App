import React, { useContext } from "react";
import { Context } from "../components/context";

const App = () => {
  const { test } = useContext(Context);
  return (
    <div>
      <div>App... {test}</div>
    </div>
  );
};

export default App;
