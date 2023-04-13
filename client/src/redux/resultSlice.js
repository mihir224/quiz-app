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
        pushResult:(state,action)=>{
            state.result.push(action.payload) //pushing the index that is passed as action into the results array
        },
        updateResult:(state,action)=>{
            const {idx,checked}=action.payload; //checked is the index of the option answer that has been updated and idx is the ques index for which we have to update the user ans in the result array 
            state.result.fill(checked,idx,idx+1); //array.fill() fills the array with the specified value from the start index till end index. Here, checked is the specified value and this will only updated the element at index idx and not beyond that as the end index is idx+1
        },
        resetResult:()=>{
            return {
                userId:null,
                result:[]
            }
        }
    }
})

export const {setUserId,pushResult,resetResult,updateResult}=resultSlice.actions;
export default resultSlice.reducer; 