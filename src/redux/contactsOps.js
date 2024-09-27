import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://66f052f0f2a8bce81be59f22.mockapi.io/";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
      try {
  const response = await axios.get("/contacts");
  // console.log("response.data", response.data);
  return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.massage); //  опрацювання помилки методом rejectWithValue
      }
});

export const fetchAddContact = createAsyncThunk(`contacts/addContact`, async (contacts, thunkAPI) => {
    try {
      const { data } = await axios.post(`/contacts`, contacts);
      // console.log("contacts", contacts);
      // console.log("data", data);
    return data;
      }
   catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const fetchDeleteContact = createAsyncThunk(`contacts/deleteContact`, async(id, thunkAPI) => {
    try {
        const { data } = await axios.delete(`/contacts/${id}`);
        return data.id //  id добавляється, щоб потім в payload не добавляти (бо можна забути)(без id прийде весь видаленний об'єкт)
    } catch (error) {
      return thunkAPI.rejectWithValue(error);  
    }
}); 


