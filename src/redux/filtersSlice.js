import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    name: "",
  },
};

export const selectNameFilter = (state) => state.filters.name;

const filtersSlice = createSlice({
  name: `filters`,
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      return {
        name: action.payload,
      };
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

