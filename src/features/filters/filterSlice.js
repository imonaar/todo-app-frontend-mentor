import { createSlice } from "@reduxjs/toolkit";

export const StatusFilters = {
  All: "all",
  Active: "active",
  Completed: "completed",
};

const initialState = {
  status: StatusFilters.All,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterChanged: (state, action) => {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
});

export const selectFilters = (state) => state.filters;
export const { filterChanged } = filterSlice.actions;

export default filterSlice.reducer;
