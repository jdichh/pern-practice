import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { TodoItemContext } from "../App";

const EditModal = ({ isVisible, onClose, item }) => {
  const [text, setText] = useState(item.text);
  const [items, setItems] = useContext(TodoItemContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const updateText = async (e) => {
    try {
      const update = { text };
      const response = await fetch(`http://localhost:4000/todos/${item.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(update),
      });
      window.location = '/'
    } catch (error) {
      console.error(error.message);
    }
  };
  if (!isVisible) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[600px] flex flex-col">
          <button
            className="text-white text-xl place-self-end"
            onClick={() => onClose()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <div className="bg-white p-12 mt-2">
            <h1 className="text-center text-3xl mb-3">Edit Activity</h1>
            <form onSubmit={handleSubmit(updateText)}>
              <input
                type="text"
                placeholder="What would you like to change it to?"
                className="w-10/12 border p-2 mt-2 mx-2 rounded-sm"
                value={text}
                {...register("text", { required: true })}
                onChange={(e) => setText(e.target.value)}
                aria-label="Edit your to-do item in this field."
              />
              <button
                type="submit"
                className="buttons px-4 py-2 rounded-sm;"
                aria-label="Confirm your edits."
              >
                Edit
              </button>
              {errors.text && (
              <div className="py-2">
                <span>The field cannot be empty.</span>
              </div>
            )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;
