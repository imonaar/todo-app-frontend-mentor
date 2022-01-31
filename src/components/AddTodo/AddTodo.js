import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../features/todos/TodosSlice";

export default function AddTodo({ dispatch }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      text,
      isComplete: false,
    };
    dispatch(addTodo(newTodo));
    setText('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Add a Todo"
        value={text}
        autoFocus={true}
      />
    </form>
  );
}
