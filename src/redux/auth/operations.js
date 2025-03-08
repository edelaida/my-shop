import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";

export const register = createAsyncThunk(
    "register",
    async (credentials, thunkApi) => {
      try {
        const { data } = await axios.post("/users/signup", credentials);
         return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );

  export const login = createAsyncThunk(
    "login",
    async (credentials, thunkApi) => {
      try {
        const { data } = await axios.post("/users/login", credentials);
         return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );



// export const goitApi = axios.create({
//     baseURL: 'https://connections-api.goit.global',
// });

// export const register = createAsyncThunk('register', async (credentials, thunkApi) => {
//     try {
//         const { data } = await goitApi.post("/users/signup", credentials);
//         console.log(data);
//         return data;
//     } catch (error) {
//         return thunkApi.rejectWithValue(error.message);
//     }
// });