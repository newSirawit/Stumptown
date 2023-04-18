import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name: "user",
    initialState:{
        username: null,
        password: null,
        email: null,
        firstName: null,
        lastName: null,
        token: null,
        newPassword: null
    },
    reducers:{
        setCredentials:(state,{payload:{username,password,email,firstName,lastName}})=>{
            state.username = username;
            state.password = password;
            state.email = email;
            state.firstName = firstName;
            state.lastName = lastName;
        },
        setAfterlogin:(state,{payload:{token}})=>{
            state.token = token
        },
        logout:(state) => {
            state.username = null;
            state.password = null;
            state.email = null;
            state.firstName = null;
            state.lastName = null;
            state.token = null
            console.log(state.username)
        },
        setProfile:(state,{payload:{email,firstName,lastName}})=>{
            state.email = email;
            state.firstName = firstName;
            state.lastName = lastName;
        },
        changePassword:(state,{payload:{password, newPassword}})=>{
            state.password = password;
            state.newPassword = newPassword
        }
    }
})
export const {setCredentials, logout , setAfterlogin, setProfile, changePassword} = userSlice.actions
export default userSlice.reducer