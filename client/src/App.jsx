import React, { createContext, useState } from "react";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
export const TodoItemContext = createContext();

const App = () => {
  const [items, setItems] = useState([]);

  return (
    <>
      <TodoItemContext.Provider value={[items, setItems]}>
        <main className="flex flex-col my-0 mx-auto w-9/12 items-center h-screen">
          <InputTodo />
          <ListTodo />
        </main>
      </TodoItemContext.Provider>
    </>
  );
};

export default App;
