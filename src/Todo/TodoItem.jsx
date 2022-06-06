import React from "react";

const TodoItem = ({ id, done, title, onToggleTodo, onDeleteTodo }) => {
  return (
    <div key={id} className="TodoItemContainer">
      <input
        id={`todo-${id}`}
        checked={done}
        onChange={() => onToggleTodo(id)}
        type="checkbox"
      />
      <label for={`todo-${id}`} className="TodoItemText">
        {title}
      </label>
      <button onClick={() => onDeleteTodo(id)} className="TodoItemDeleteButton">
        &#x2715;
      </button>
    </div>
  );
};

export default TodoItem;
