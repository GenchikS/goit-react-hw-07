import { createSlice } from "@reduxjs/toolkit";
import { fetchFilters } from "./contactsOps";
const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: "",
  },
};

const filtersSlice = createSlice({
  name: `filters`,
  initialState,
extraReducers: (bilder) =>
    bilder
      .addCase(fetchFilters.pending, (state) => {
        //  payload не використовуємо (немає потреби)
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchFilters.fulfilled, (state, { payload }) => {
        (state.loading = false), (state.name = payload);
      })
      .addCase(fetchFilters.rejected, (state, { payload }) => {
        (state.loader = false), (state.error = payload), (state.name = ""); //  скидання до початкового стану, коли сталася помилка.
      }),
});


export const { selectFiltered } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

