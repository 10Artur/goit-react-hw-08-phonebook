import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContact = createAsyncThunk(
    'contacts/fetch',
    async(_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            // console.log(response.data);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/add',
    async({ name, number }, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', { name, number });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/delete',
    async(contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const contactsUpdate = createAsyncThunk(
    'contacts/update',
    async(contactId, thunkAPI) => {
        try {
            const response = await axios.patch(`/contacts/${contactId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);