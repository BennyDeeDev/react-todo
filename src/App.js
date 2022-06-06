import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoList from "./Todo/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { title: "test todo", id: uuid(), done: false },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleAddTodo = (event) => {
    if (event.key === "Enter") {
      setTodos([
        ...todos,
        { id: uuid(), title: event.target.value, done: false },
      ]);
      event.target.value = "";
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((t) => {
        if (t.id === id) {
          return { ...t, done: !t.done };
        }
        return t;
      })
    );
  };

  const addedTodos = todos.filter(({ done }) => !done);
  const filteredTodos = todos.filter((t) =>
    t.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const doneTodos = todos.filter(({ done }) => done);

  return (
    <div className="App">
      <div className="HeaderContainer">
        <div className="HeaderContent">
          <img style={{ width: 120 }} src={logo} alt="React-Logo" />
          <h1>React Todo</h1>
        </div>
        <div className="SearchInputContainer">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="InputItem"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="MainContainer">
        <div className="TodoInputContainer">
          <input
            onKeyDown={handleAddTodo}
            placeholder="Add todo here"
            className="InputItem"
          />
        </div>

        {searchQuery ? (
          <TodoList
            title="Search results:"
            list={filteredTodos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        ) : (
          <>
            <TodoList
              title="Added todos"
              list={addedTodos}
              onDeleteTodo={handleDeleteTodo}
              onToggleTodo={handleToggleTodo}
            />
            <TodoList
              title="Done todos"
              list={doneTodos}
              onDeleteTodo={handleDeleteTodo}
              onToggleTodo={handleToggleTodo}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
