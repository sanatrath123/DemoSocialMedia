import { createSlice } from "@reduxjs/toolkit";

const initialState={
    UserData: [],
    status: false,
}

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action)=>{
            debugger
            state.UserData = action.payload,
            state.status = true 
        },

        logout: (state)=>{
            state.UserData = [],
             state.status = false 
        }
    }
})


export const { login , logout} = AuthSlice.actions
export default AuthSlice.reducer