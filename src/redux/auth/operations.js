import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utility to add JWT
const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */

export const register = createAsyncThunk(
    'auth/register',
    async(credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/signup', credentials);
            // Після успішної реєстрації додайте маркер до заголовка HTTP
            setAuthHeader(response.data.token);
            console.log(credentials);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */

export const logIn = createAsyncThunk(
    'auth/login',
    async(credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/login', credentials);
            // Після успішної реєстрації додайте маркер до заголовка HTTP
            setAuthHeader(response.data.token);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async(_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        //  Після успішного виходу видаліть маркер із заголовка HTTP
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

//  GET @ /users/current
//  headers: Authorization: Bearer token

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async(_, thunkAPI) => {
        // Читання токена зі стану через getState()
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            // Якщо токена немає, вийти без виконання жодного запиту
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
            // Якщо є маркер, додайте його до HTTP-заголовка та виконайте запит
            setAuthHeader(persistedToken);
            const response = await axios.get('/users/current');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);