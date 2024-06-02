import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "./Todo";

interface TodoListProps {
  todos: Todo[];
  onToggleStatus: (id: string) => void;
  onDelete: (id: string) => void;
}
const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleStatus,
  onDelete,
}) => {
  return (
    <div>
      <div className="mt-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            status={todo.status}
            onToggleStatus={onToggleStatus}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
