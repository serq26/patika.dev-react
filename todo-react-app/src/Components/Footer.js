import React from "react";

export default function Footer({ todos, setTodos, filter, handleFilter }) {

  let leftTodosCount = 0;
  todos.map(todo => !todo.status ? leftTodosCount += 1 : leftTodosCount);

  const clearCompleted = () => {
    const clearedTodos = todos.filter(todo => !todo.status);
    setTodos(clearedTodos);
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{leftTodosCount}</strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <button className={filter === "all" ? "selected" : ""} onClick={() => handleFilter("all")}>
            All
          </button>
        </li>
        <li>
          <button className={filter === "active" ? "selected" : ""} onClick={() => handleFilter("active")}>Active</button>
        </li>
        <li>
          <button className={filter === "completed" ? "selected" : ""} onClick={() => handleFilter("completed")}>Completed</button>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
    </footer>
  );
}
