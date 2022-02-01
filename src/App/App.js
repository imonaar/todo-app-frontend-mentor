import TodoList from "../features/todos/TodoList";
import Header from "../components/header";

function App() {
  return (
    <div className="container">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
