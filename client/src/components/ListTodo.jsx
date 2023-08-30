import React, { useEffect, useContext } from "react";
import EditTodo from "./EditTodo";
import { TodoItemContext } from "../App";

const ListTodo = () => {
  const [items, setItems] = useContext(TodoItemContext)

  const getItems = async () => {
    try {
      const getData = await fetch("http://localhost:4000/todos");
      const data = await getData.json();
      setItems(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  const deleteItem = async (id) => {
    try {
      await fetch(`http://localhost:4000/todos/${id}`, {
        method: "DELETE",
      });
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <table className="table-auto w-6/12 mb-12 border-4">
        <thead className="bg-sky-800">
          <tr className="text-white">
            <th className="font-light">Activities</th>
            <th className="font-light">Options</th>
          </tr>
        </thead>
          <tbody className="text-center">
            {items.map((item) => (
              <tr key={item.id}>
                <td className="border-2">{item.text}</td>
                <td className="border-2 w-2/12">
                  <EditTodo item={item}/>
                  <button
                    className="p-2 mx-1 bg-red-800 rounded-sm"
                    onClick={() => deleteItem(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#F2F2F2"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
      </table>
    </>
  );
};

export default ListTodo;
