import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import Footer from "./Components/Footer";
import TodoList from "./Components/TodoList";

function App() {
  
  const [todos, setTodos] = useState([{content: "Learn Javascript", status: true},{content: "Learn React", status: false},{content: "Have a life!", status: false}]);

  const [filter,setFilter] = useState('all');

  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    handleFilter(filter);
  }, [todos, filter]);

  const handleFilter = (filter) => {
    switch (filter) {
      case "all":
        setFilteredTodos(todos);
        break;
      case "active":
        setFilteredTodos(todos.filter(todo => !todo.status));
        break;
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.status));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }

    setFilter(filter);
  }

  return (
    <div className="App">
      <section className="todoapp">
        <AddTodo todos={todos} addTodo={setTodos} />
        <section className="main">
          <TodoList todos={filteredTodos} setTodos={setTodos} />
        </section>
        <Footer todos={todos} setTodos={setTodos} filter={filter} handleFilter={handleFilter}/>
      </section>
    </div>
  );
}

export default App;
