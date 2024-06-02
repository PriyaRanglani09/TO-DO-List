import React, { useState } from "react";

interface TodoFormProps {
  onSubmit: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
  const [newTodo, setNewTodo] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo.trim()) {
      onSubmit(newTodo);
      setNewTodo("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex justify-center mt-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
          className="p-2 rounded-md border border-gray-300  focus:border-sky-500 mr-2"
        />
        <button
          type="submit"
          className="ml-4 py-2 px-4  bg-blue-600 text-white rounded-md"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
