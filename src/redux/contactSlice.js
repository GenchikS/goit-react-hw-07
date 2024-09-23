import { createSlice } from "@reduxjs/toolkit"
import { fetchAddContact, fetchContacts, fetchDeleteContact } from "./contactsOps";


const initialisetion = {
  contacts: {
    items: [],
    loading: false,
    error: null
  },
  filters: {
		name: ""
	}
}

const selectFilteredContacts = (state) => state.contacts;





const contactsSlice = createSlice({
  name: `contacts`,
  initialisetion,
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

//  створення редусера contactsReducer
export const contactsReducer = contactsSlice.reducer