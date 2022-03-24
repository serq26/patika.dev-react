import React from "react";

export default function TodoList({ todos, setTodos }) {

  const handleUpdate = (index, todo) => {
    const newTodos = [...todos];
    newTodos[index] = todo;
    setTodos(newTodos);
  }

  const handleDelete = (index) => {
    const newTodos = todos.filter((todo,i) => i !== index);
    setTodos(newTodos);
  }

  const handleAllTodos = () => {
    const markStatus = todos.every(todo=> todo.status);

    const markedTodos = todos.map(todo => (
      {...todo, status: todo.status ? todo.status= !markStatus : todo.status= !markStatus}
    ));
    setTodos(markedTodos);
  }

  return(
    <>
      <input className="toggle-all" id="toggle-all" type="checkbox" onClick={() => handleAllTodos()}/>
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li className={todo.status ? "completed" : ""} key={index}>
            <div className="view">
              <input className="toggle" type="checkbox" onClick={() => (handleUpdate(index,{...todo,status:!todo.status}))} checked={todo.status ? "checked":""} onChange={() => todo.status ? "checked":""}/>
              <label>{todo.content}</label>
              <button className="destroy" onClick={() => handleDelete(index)}></button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
