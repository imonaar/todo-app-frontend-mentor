import { removeTodo, toggleTodo } from "./TodosSlice";
import { useDispatch } from "react-redux";

export default function TodoListItem({ onCompleteChange, todo }) {
  const { isComplete: completed, text, id } = todo;
  console.log(todo)
  const dispatch = useDispatch();
  function handleCompleteChanged(e) {
    dispatch(toggleTodo(id));
  }
  return (
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        onChange={handleCompleteChanged}
        checked={completed}
      />
      <div className="todo-text"> {text} </div>
      <button className="destroy" onClick={() => dispatch(removeTodo(id))}>
        delete
      </button>
    </div>
  );
}
