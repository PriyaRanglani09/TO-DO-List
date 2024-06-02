import React from "react";
import { Todo } from "./Todo";

const TodoItem: React.FC<Todo> = ({
  id,
  text,
  status,
  onToggleStatus,
  onDelete,
}) => {
  return (
    <div className="todo">
      <div
        className={`todo-item ${
          status ? "completed" : "remaining"
        } flex flex-row gap-4 items-center bg-white py-2 px-6 rounded-lg border focus:border-sky-500 mr-2 mt-2`}
      >
        {onToggleStatus && (
          <input
            type="checkbox"
            checked={status}
            onChange={() => onToggleStatus(id)}
          />
        )}

        <span>{text}</span>
        {onDelete && (
          <button
            onClick={() => onDelete(id)}
            className="ml-4 py-2 px-4 bg-red-500 text-white rounded-md"
          >
            Delete
          </button>
        )}
      </div>

      <div className=" mt-2 flex flex-row gap-2 items-center ">
        <h1 className="text-lg">Status:</h1>
        {status ? (
          <p className="text-lg text-green-700"> Completed</p>
        ) : (
          <p className="text-lg  text-red-700"> Remaining</p>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
