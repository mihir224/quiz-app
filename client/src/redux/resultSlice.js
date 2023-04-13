import { createSlice } from "@reduxjs/toolkit";

const resultSlice=createSlice({
    name:'result',
    initialState:{
        userId:null,
        result:[] //to store index values of the answers(options) submitted by user
    },
    reducers:{
        setUserId:(state,action)=>{
                state.userId=action.payload
        },
        updateResult:(state,action)=>{
            state.result.push(action.payload) //pushing the index that is passed as action into the results array
        },
        resetResult:()=>{
            return {
                userId:null,
                result:[]
            }
        }
    }
})

export const {setUserId,updateResult,resetResult}=resultSlice.actions;
export default resultSlice.reducer; 