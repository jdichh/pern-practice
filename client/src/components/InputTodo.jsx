import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TodoItemContext } from "../App";

const InputTodo = () => {
  const [items, setItems] = useContext(TodoItemContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitData = async (data, e) => {
    try {
      const response = await fetch("http://localhost:4000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      // const newItem = await response.json(); 
      // setItems([...items, newItem]);
      reset();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col w-5/12 justify-center mb-12 mt-36">
          <h1 className="text-center text-3xl">Activity Logger</h1>
          <form onSubmit={handleSubmit(submitData)}>
            <input
              type="text"
              placeholder="What's on your list today?"
              className="w-10/12 border my-2 mx-2 p-2 rounded-sm"
              {...register("text", { required: true })}
              aria-label="Enter a to-do item in this field."
            />
            <button
              type="submit"
              className="buttons px-6 py-2 rounded-sm;"
              aria-label="Add to-do item button."
            >
              Add
            </button>
            {errors.text && (
              <div className="px-2">
                <span>The field cannot be empty.</span>
              </div>
            )}
          </form>
      </div>
    </>
  );
};

export default InputTodo;
