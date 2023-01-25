import {createSlice} from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name: "profileStatus",
    initialState: {
        status: false
    },
    reducers: {
        login: (state) => {
            state.status = true
        },
        logout: (state) => {
            state.status = false
        }
    }
})

export const loginStatus = accountSlice.actions.login
export const logoutStatus = accountSlice.actions.logout
export default accountSlice.reducer