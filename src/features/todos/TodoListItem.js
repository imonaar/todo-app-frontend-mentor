import { removeTodo, toggleTodo } from "./TodosSlice";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Cancel } from "./icon-cross.svg";

const selectTodoById = (state, todoId) => {
  return state.todos.find((todo) => todo.id === todoId);
};

export default function TodoListItem({ id }) {
  const todo = useSelector((state) => selectTodoById(state, id));
  const { isComplete: completed, text } = todo;
  const dispatch = useDispatch();

  function handleCompleteChanged(e) {
    dispatch(toggleTodo(id));
  }

  return (
    <div className="todo-list-item">
      <input
        type="checkbox"
        className="toggle"
        onChange={handleCompleteChanged}
        checked={completed}
      />
      <p
        className="todo-text"
        style={{ textDecoration: completed ? "line-through" : "" }}
      >
        {text}
      </p>
      <button className="destroy" onClick={() => dispatch(removeTodo(id))}>
        <Cancel />
      </button>
    </div>
  );
}
