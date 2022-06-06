import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ list, title, onDeleteTodo, onToggleTodo }) => {
  return (
    <div className="TodoListContainer">
      <h2 className="TodoListTitle">{title}</h2>
      {list.map((t) => (
        <TodoItem
          key={t.id}
          id={t.id}
          done={t.done}
          title={t.title}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
