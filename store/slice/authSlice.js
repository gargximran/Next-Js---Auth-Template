import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogin: false,
        profile: {},
        token: ''
    },
    reducers: {
        login: (state, { payload }) => {
            state.isLogin = true;
            state.profile = payload.user;
            state.token = payload.token
        },
        logout: (state) => {
            state.isLogin = false;
            state.profile = {}
            state.token = ''
        }
    }
})



export const {
    login,
    logout
} = authSlice.actions

export default authSlice.reducer

export const authSelector = state => state.auth
