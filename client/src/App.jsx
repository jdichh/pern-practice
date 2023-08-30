import React from "react";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
import EditTodo from "./components/EditTodo";

const App = () => {
  return (
    <>
      <main style={{outline: "1px solid red"}} className="flex flex-col my-0 mx-auto w-9/12 items-center h-screen">
        <InputTodo />
        <ListTodo />
        <EditTodo />
      </main>
    </>
  );
};

export default App;
