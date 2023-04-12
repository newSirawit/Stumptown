import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name: "user",
    initialState:{
        // email: null,
        // firstname: null,
        // lastname: null,
        // password: null,
        // repassword: null,
        // for john
        username: null,
        password: null,
        email: null,
        firstName: null,
        lastName: null,
    },
    reducers:{
        setCredentials:(state,{payload:{username,password,email,firstName,lastName}})=>{
            // state.email=email;
            // state.firstname=firstname;
            // state.lastname=lastname;
            // state.password=password;
            // state.repassword=repassword;
            state.username = username;
            state.password = password;
            state.email = email;
            state.firstName = firstName;
            state.lastName = lastName

        }
    }
})
export const {setCredentials} = userSlice.actions
export default userSlice.reducer