export default function TodosFilter({ setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter("ALL")}>Show all</button>
      <button onClick={() => setFilter("ACTIVE")}>Show active</button>
      <button onClick={() => setFilter("COMPLETE")}>Show Completed</button>
    </div>
  );
}
