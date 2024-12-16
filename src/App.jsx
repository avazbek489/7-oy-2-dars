import React from "react";
import Todo from "./ToDo";
import Form from "./Form";
import Api from "./Api";
import Counter from "./Counter";
import DarkMode from "./DarkMode";
function App() {
  return (
    <>
      <div className="flex flex-col items-center gap-14">
        <Todo />
        <Form />
        <Api />
        <Counter />
        <DarkMode />
      </div>
    </>
  );
}

export default App;
