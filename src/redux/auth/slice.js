import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./operations";

const initialState = {
    user: {
        name: '',
        email: '',
    },
    token: '',
    isloggedIn: false,  
};

const slice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isloggedIn = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isloggedIn = true;
            })
    }
});

export const authSlice = slice.reducer;
