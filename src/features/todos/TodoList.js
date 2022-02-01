import { selectFilteredTodoIds } from "./TodosSlice";
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

export default function TodoList() {
  const todoIds = useSelector(selectFilteredTodoIds);

  return (
    <div>
      {todoIds.map((todoId) => {
        return <TodoListItem key={todoId} id={todoId} />;
      })}
    </div>
  );
}
