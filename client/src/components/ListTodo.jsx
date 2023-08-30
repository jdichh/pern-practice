import React, { useEffect, useState } from "react";

const ListTodo = () => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    try {
      const response = await fetch("http://localhost:4000/todos");
      const data = await response.json();

      setItems(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <table
        className="table-auto w-8/12 mb-12"
        style={{ outline: "1px solid red" }}
      >
        <thead>
          <tr>
            <th>Things To-do</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ListTodo;
