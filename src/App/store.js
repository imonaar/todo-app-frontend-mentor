import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer  from "../features/todos/TodosSlice";

export default configureStore({
    reducer:{
        todos: todoSliceReducer
    }
})