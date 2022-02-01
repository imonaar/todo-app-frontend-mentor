import { createSlice, createSelector } from "@reduxjs/toolkit";
import { StatusFilters } from "../filters/filterSlice";

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
      return state.filter((todo) => !todo.isComplete);
    },
  },
});

export const selectTodoIds = createSelector(
  (state) => state.todos,
  (todos) => todos.map((todo) => todo.id)
);

export const selectFilteredTodos = createSelector(
  (state) => state.todos,
  (state) => state.filters.status,
  (todos, status) => {
    if (status === StatusFilters.All) {
      return todos;
    }

    const completedStatus = status === StatusFilters.Completed;
    return todos.filter((todo) => todo.isComplete === completedStatus);
  }
);

export const selectFilteredTodoIds = createSelector(
  selectFilteredTodos,
  (filteredTodos) => filteredTodos.map((todo) => todo.id)
);

export const { addTodo, removeTodo, toggleTodo, clearCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;

//https://www.digitalocean.com/community/tutorials/redux-reselect
