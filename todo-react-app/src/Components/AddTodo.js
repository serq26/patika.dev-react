import {useEffect, useState} from "react";

const initialTodoValues = {content: "", status: false};

export default function AddTodo({ todos, addTodo }) {

  const [form,setForm] = useState(initialTodoValues);

  useEffect(() => {
    setForm(initialTodoValues);
  }, [todos]);

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(form.content === ""){
      return false;
    }

    addTodo([...todos, form]);
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          name="content"
          placeholder="What needs to be done?"
          value={form.content}
          onChange={onChangeInput}
          autoFocus
        />
      </form>
    </header>
  );
}
