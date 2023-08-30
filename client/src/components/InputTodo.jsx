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
      <div style={{outline: "1px solid red"}} className="flex flex-col w-5/12 justify-center mb-12 mt-12">
        <div>
          <h1 className="text-center text-3xl">Activity Log</h1>
          <form onSubmit={handleSubmit(submitData)}>
            <input
              type="text"
              placeholder="What's on your list today?"
              className="w-10/12 border my-2 mx-2 py-2 px-3 rounded-sm"
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
      </div>
    </>
  );
};

export default InputTodo;
