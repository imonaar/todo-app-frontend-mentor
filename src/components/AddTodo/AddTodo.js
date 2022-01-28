import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../features/todos/TodosSlice";

export default function AddTodo({ dispatch }) {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      text: todo,
      isComplete: false,
    };
    dispatch(addTodo(newTodo));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
    </form>
  );
}
