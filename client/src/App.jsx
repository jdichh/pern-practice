import React from "react";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
import EditTodo from "./components/EditTodo";

const App = () => {
  return (
    <>
      <main>
        <InputTodo />
        <ListTodo />
        <EditTodo />
      </main>
    </>
  );
};

export default App;
