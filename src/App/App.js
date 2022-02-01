import TodoList from "../features/todos/TodoList";
import AddTodo from "../features/todos/AddTodo";
import TodosFilter from "../features/filters/todoFilter";
import Header from "../components/header";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <TodoList />
        <TodosFilter />
      </main>
    </div>
  );
}

export default App;
