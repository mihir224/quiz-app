import {createSlice} from "@reduxjs/toolkit";

const quesSlice=createSlice({
    name:'questions',
    initialState:{
        quesData:[], //this stores the whole questions data i.e. the question name, id, and options
        answers:[], 
        qIdx:0
    },
    reducers:{
        startQuiz:(state,action)=>{
            return{
                ...state,
                quesData:action.payload //while dispatching the action, we will be sending the question data each time
            }
        },
        moveNext:(state)=>{
            return {
                ...state,
                qIdx:state.qIdx+1
            }
        },
        movePrev:(state)=>{
            return {
                ...state,
                qIdx:state.qIdx-1
            }
        },
        resetQues:()=>{
            return {
                quesData:[],
                answers:[], 
                qIdx:0
            }
        }
    }
})

export const {startQuiz,moveNext,movePrev,resetQues} = quesSlice.actions;
export default quesSlice.reducer;


