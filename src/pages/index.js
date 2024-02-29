import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  selectTodos,
} from "../slices/todoSlice";
import { FaPlus, FaTrashAlt, FaTimes, FaCheck } from "react-icons/fa";

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
      <h1>Redux Todo List</h1>
      <input
        type="text"
        placeholder="Enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="add" onClick={handleAddTodo}>
        Add <FaPlus />
      </button>
      <div className="todoitems">
        {todos.map((todo) => (
          <div className="todoitem" key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <div>
              <button
                className="check"
                onClick={() => handleToggleTodo(todo.id)}
              >
                {todo.completed ? (
                  <>
                    <FaTimes />
                  </>
                ) : (
                  <>
                    <FaCheck />
                  </>
                )}
              </button>
              <button
                className="delete"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
