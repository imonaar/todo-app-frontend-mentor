import { selectFilteredTodoIds } from "./TodosSlice";
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
import AddTodo from "./AddTodo";

export default function TodoList() {
  const todoIds = useSelector(selectFilteredTodoIds);

  return (
    <section aria-label="todo list" className="todo-container">
      <AddTodo />
      <div className="todo-list">
        {todoIds.map((todoId) => {
          return <TodoListItem key={todoId} id={todoId} />;
        })}
      </div>
    </section>
  );
}
