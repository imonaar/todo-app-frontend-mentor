import { selectTodos, completeTodos, incompleteTodos } from "./TodosSlice";
import { useDispatch, useSelector } from "react-redux";
import AddTodo from "../../components/AddTodo/AddTodo";
import { useState } from "react";
import TodosFilter from "./todoFilter";
import { removeTodo } from "./TodosSlice";

export default function Todos() {
  const todos = useSelector(selectTodos);
  const [filter, setFilter] = useState("ALL");
  const dispatch = useDispatch();

  const complete = useSelector(completeTodos);
  const active = useSelector(incompleteTodos);

  return (
    <div>
      <AddTodo dispatch={dispatch} />
      {filter === "ALL" &&
        todos.map((todo) => {
          return (
            <div key={todo.id}>
              <input type="checkbox" />
              <p> {todo.text} </p>
              <button
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      {filter === "ACTIVE" &&
        active.map((todo) => {
          return (
            <div key={todo.id}>
              <input type="checkbox" />
              <p> {todo.text} </p>
              <button
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      {filter === "COMPLETE" &&
        complete.map((todo) => {
          return (
            <div key={todo.id}>
              <input type="checkbox" />
              <p> {todo.text} </p>
              <button
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      <TodosFilter setFilter={setFilter} />
    </div>
  );
}
