import { createSlice, createSelector } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },

    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const selectTodos = (state) => state.todos;
export const completeTodos = createSelector([selectTodos], (todos) =>
  todos.filter((todo) => todo.isComplete)
);
export const incompleteTodos = createSelector([selectTodos], (todos) =>
  todos.filter((todo) => !todo.isComplete)
);
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;

//https://www.digitalocean.com/community/tutorials/redux-reselect
