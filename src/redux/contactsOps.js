import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.default.baseURL = "https://66a80dd853c13f22a3d1c628.mockapi.io/object";

export const fetchContacts = createAsyncThunk(`contacts/fetchAll`, async (_, thankAPI) => {
    try {
        const { data } = await axios.get(`/clients`);
        return data;
    } catch (error) {
      return thankAPI.rejectWithValue(error); //  опрацювання помилки методом rejectWithValue
    }
})

export const fetchAddContact = createAsyncThunk(`contacts/addContact`, async (client, thankAPI) => {
    try {
        const { data } = await axios.post(`/clients`, client);
            return data
      }
   catch (error) {
    return thankAPI.rejectWithValue(error);
  }
});

export const fetchDeleteContact = createAsyncThunk(`contacts/deleteContact`, async(id, thankAPI) => {
    try {
        const { data } = await axios.delete(`/clients/${id}`);
        return data.id //  id добавляється, щоб потім в payload не добавляти (бо можна забути)(без id прийде весь видаленний об'єкт)
    } catch (error) {
      return thankAPI.rejectWithValue(error);  
    }
}); 

