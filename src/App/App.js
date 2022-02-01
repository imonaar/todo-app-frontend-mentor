import TodoList from "../features/todos/TodoList";
import AddTodo from "../features/todos/AddTodo";
import TodosFilter from "../features/filters/todoFilter";
import Header from "../components/header";

function App() {
  return (
    <div>
      <Header />
      <AddTodo />
      <TodoList />
      <TodosFilter />
    </div>
  );
}

export default App;
