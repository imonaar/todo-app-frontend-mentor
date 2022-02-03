import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "./TodosSlice";

export default function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(()=>{
    inputRef.current.focus()
  }, [])

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text === ''){
      return
    }

    const newTodo = {
      id: uuidv4(),
      text,
      isComplete: false,
    };
    
    dispatch(addTodo(newTodo));
    setText("");
  };

  return (
    <div className="todo-input">
      <form onSubmit={handleSubmit}>
        <label for="todo" class="visuallyhidden">
          Write a new Todo Item
        </label>
        <input
          name = "todo"
          type="text"
          onChange={handleChange}
          placeholder="Add a Todo"
          value={text}
          autoFocus={true}
          ref={inputRef}
        />
      </form>
    </div>
  );
}

//https://www.w3.org/WAI/tutorials/forms/labels/
