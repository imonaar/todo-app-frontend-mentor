import { useDispatch, useSelector } from "react-redux";
import { clearCompleted } from "../todos/TodosSlice";
import { StatusFilters } from "./filterSlice";
import { filterChanged } from "./filterSlice";

const RemainingTodos = ({ count }) => {
  const suffix = count === 1 ? "" : "s";
  return (
    <p>
      {count} item{suffix} left
    </p>
  );
};

const StatusFilter = ({ value: status, onChange }) => {
  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key];
    const handleClick = () => onChange(value);
    const className = value === status ? "selected" : "";

    return (
      <li key={value}>
        <button className={className} onClick={handleClick}>
          {key}
        </button>
      </li>
    );
  });

  return (
    <div className="actions">
      <ul> {renderedFilters} </ul>
    </div>
  );
};

export default function TodosFilter({ setFilter }) {
  const dispatch = useDispatch();

  const todosRemaining = useSelector((state) => {
    const uncompletedTodos = state.todos.filter((todo) => !todo.isComplete);
    return uncompletedTodos.length;
  });

  const { status } = useSelector((state) => state.filters);

  const onStatusChange = (status) => {
    dispatch(filterChanged(status));
  };

  return (
    <footer className="footer">
      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />

      <button onClick={() => dispatch(clearCompleted())}>
        Clear Completed
      </button>
    </footer>
  );
}
