import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  selectTodos,
} from "../slices/todoSlice";

export default function Home() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      dispatch(
        addTodo({
          id: Date.now(),
          text: input.trim(),
          completed: false,
        })
      );
      setInput("");
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleToggleTodo(todo.id)}>Done</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
