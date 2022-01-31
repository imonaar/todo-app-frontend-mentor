import { useDispatch, useSelector } from "react-redux";
import { clearCompleted } from "../todos/TodosSlice";
import { StatusFilters } from "./filterSlice";
import { filterChanged } from "./filterSlice";

const RemainingTodos = ({ count }) => {
  const suffix = count === 1 ? "" : "s";
  return (
    <div>
      {count} item{suffix} left
    </div>
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
    <div>
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
    <div>
      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />

      {/* <button onClick={() => setFilter("ALL")}>Show all</button>
      <button onClick={() => setFilter("ACTIVE")}>Show active</button>
      <button onClick={() => setFilter("COMPLETE")}>Show Completed</button> */}
      <button onClick={() => dispatch(clearCompleted())}>
        clear completed
      </button>
    </div>
  );
}
