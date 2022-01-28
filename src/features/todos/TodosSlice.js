import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    text: "go to the Market",
    isComplete: false,
  },
  {
    id: 2,
    text: "Learn React",
    isComplete: false,
  },
  {
    id: 3,
    text: "Learn redux",
    isComplete: true,
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },

    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const selectTodos = (state) => state.todos;
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
