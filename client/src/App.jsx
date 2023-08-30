import React, { createContext, useState } from "react";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
import EditTodo from "./components/EditTodo";
export const TodoItemContext = createContext();

const App = () => {
  const [items, setItems] = useState([]);

  return (
    <>
      <TodoItemContext.Provider value={[items, setItems]}>
        <main
          style={{ outline: "1px solid red" }}
          className="flex flex-col my-0 mx-auto w-9/12 items-center h-screen"
        >
          <InputTodo />
          <ListTodo />
          <EditTodo />
        </main>
      </TodoItemContext.Provider>
    </>
  );
};

export default App;
