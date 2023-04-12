import { createSlice } from "@reduxjs/toolkit";

const resultSlice=createSlice({
    name:'result',
    initialState:{
        userId:null,
        result:[] //to store index values of the answers submitted by user
    },
    reducers:{
        setUserId:(state,action)=>{
            state.userId=action.payload
        }
    }
})

export const {setUserId}=resultSlice.actions;
export default resultSlice.reducer;