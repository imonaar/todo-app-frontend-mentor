import { selectTodos } from "./TodosSlice";
import { useDispatch, useSelector } from "react-redux";
import AddTodo from "../../components/AddTodo/AddTodo";

export default function Todos() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
    <div>
      <AddTodo dispatch={dispatch} />
      {todos.map((todo) => {
        return <p key={todo.id}> {todo.text} </p>;
      })}
    </div>
  );
}
