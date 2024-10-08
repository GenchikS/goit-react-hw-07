import { createSelector, createSlice } from "@reduxjs/toolkit"
import {
  fetchAddContact,
  fetchContacts,
  fetchDeleteContact,
  } from "./contactsOps";
import { selectFilter } from "./filtersSlice";


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

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;




const contactsSlice = createSlice({
  name: `contacts`,
  initialState,
  extraReducers: (bilder) =>
    bilder
      .addCase(fetchContacts.pending, state => {
        //  payload не використовуємо (немає потреби)
              state.loading = true,
              state.error = null;
        })
          .addCase(fetchContacts.fulfilled, (state, { payload }) => {
              state.loading = false,
              state.items = payload
        })
          .addCase(fetchContacts.rejected, (state, { payload }) => {
                state.loader = false,
                state.error = payload,
                state.items = []  //  скидання до початкового стану, коли сталася помилка.
        })
          .addCase(fetchAddContact.pending, state => {
              state.loading = true,
              state.error = null
          }).addCase(fetchAddContact.fulfilled, (state, { payload }) => {
              state.loading = false,
              state.items.push(payload) //  використання мутуючого методу (методом immer під капотом redux)
          }).addCase(fetchAddContact.rejected, (state, { payload }) => {
              state.loading = false,
              state.error = payload,
              state.items = []
          }).addCase(fetchDeleteContact.pending, state => {
              state.loader = true,
                  state.error = false
          }).addCase(fetchDeleteContact.fulfilled, (state, { payload }) => {
            (state.loading = false),
              (state.items = state.items.filter(({ id }) => id !== payload)); //  при видаленні id (повертається з fetchDeleteContact) повертаємо новий масив без цього id
          }).addCase(fetchDeleteContact.rejected, (state, { payload }) => {
              state.loading = false,
                  state.error = payload,
                  state.items = []
          })
});

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filters) => {
    // console.log("contacts", contacts);
    // console.log("filters", filters);
    const filterSearch = !filters
      ? contacts
      : contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filters.toLowerCase())
        );
    // console.log("all", filterSearch);
  return filterSearch;
  }
);

//  створення редусера contactsReducer
export const contactsReducer = contactsSlice.reducer
