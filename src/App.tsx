import "./App.css";
import React, { useState } from "react";
import { Todo } from "./components/Todo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: crypto.randomUUID(), text, status: false }]);
  };

  const toggleStatus = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full m-auto bg-yellow-200">
      <header className="header text-4xl mb-5">Todo List</header>
      <div className="flex flex-col items-start">
        <TodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onToggleStatus={toggleStatus}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
