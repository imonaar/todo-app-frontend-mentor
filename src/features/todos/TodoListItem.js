import { removeTodo, toggleTodo } from "./TodosSlice";
import { useDispatch, useSelector } from "react-redux";

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
      <div className="todo-text"> {text} </div>
      <button className="destroy" onClick={() => dispatch(removeTodo(id))}>
        delete
      </button>
    </div>
  );
}
