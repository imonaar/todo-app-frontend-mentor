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

    toggleTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          isComplete: !todo.isComplete,
        };
      });
    },
    clearCompleted: (state, action) => {
      return state.filter(todo => !todo.isComplete)
    }
  },
});

export const selectTodos = (state) => state.todos;
export const completeTodos = createSelector([selectTodos], (todos) =>
  todos.filter((todo) => todo.isComplete)
);
export const incompleteTodos = createSelector([selectTodos], (todos) =>
  todos.filter((todo) => !todo.isComplete)
);

export const { addTodo, removeTodo, toggleTodo, clearCompleted } = todoSlice.actions;
export default todoSlice.reducer;

//https://www.digitalocean.com/community/tutorials/redux-reselect
