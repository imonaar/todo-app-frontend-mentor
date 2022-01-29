import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "../features/todos/TodosSlice";
import { saveState, loadState } from "./localStorage";
import throttle from "lodash.throttle";

const store = configureStore({
  reducer: {
    todos: todoSliceReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(throttle(() => saveState(store.getState()), 1000));

export default store;
