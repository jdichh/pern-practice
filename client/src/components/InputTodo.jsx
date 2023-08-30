import React from "react";
import { useForm } from "react-hook-form";

const InputTodo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitData = async (data, e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:4000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center grow">
        <div className="p-10 mt-10">
          <h1 className="text-4xl text-center mb-6">To-Dos</h1>
          <form onSubmit={handleSubmit(submitData)} className="max-w-sm p-2">
            <input
              type="text"
              placeholder="What's on your list today?"
              {...register("text", { required: true })}
              aria-label="Enter a to-do item in this field."
            />
            <button
              type="submit"
              className="buttons"
              aria-label="Add to-do item button."
            >
              Add
            </button>
            {errors.text && (
              <span className="text-center">The field cannot be empty.</span>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default InputTodo;
