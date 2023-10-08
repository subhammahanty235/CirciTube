import { createReducer } from "@reduxjs/toolkit";
const initialState = {}

export const userReducer = createReducer(initialState, {
    REQUEST_LOGIN_WITH_GOOGLE:(state)=>{
        state.loading = true;
    },
    REQUEST_LOGIN_WITH_GOOGLE_SUCCESS:(state , action)=>{
        state.loading = false;
        state.user = action.payload.user;
        state.authenticatedUser = true;
        localStorage.setItem("authToken" , action.payload.token)
    },
    REQUEST_LOGIN_WITH_GOOGLE_FAILED:(state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.authenticatedUser = false;
    },
    CLEAN_ERRORS: (state) => {
        state.error = null;
      },
})