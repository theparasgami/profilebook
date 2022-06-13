import {createSlice} from "@reduxjs/toolkit";

const initialState=([]);

const userSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
        updateUser:(state,{payload})=>{
            return (state=payload)
        }
    }
});

export const {updateUser} = userSlice.actions;
export default userSlice.reducer;