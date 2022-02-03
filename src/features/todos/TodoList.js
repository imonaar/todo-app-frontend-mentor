import { selectFilteredTodoIds } from "./TodosSlice";
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
import AddTodo from "./AddTodo";
import TodosFilter from "../filters/todoFilter";

export default function TodoList() {
  const todoIds = useSelector(selectFilteredTodoIds);

  return (
    <main aria-label="todo list" className="todo-container">
      <AddTodo />
      <div className="todo-list-container" >
        <div className="todo-list">
          {todoIds.map((todoId) => {
            return <TodoListItem key={todoId} id={todoId} />;
          })}
        </div>
        <TodosFilter />
      </div>
    </main>
  );
}
