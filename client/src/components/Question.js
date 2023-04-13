import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchQuestion } from "../hooks/FetchQuestion"; //this custom hook is basically used to initialise the state of questions with the questions data
import { updateResult } from "../redux/resultSlice";

function Question({selectOption}){
    const dispatch=useDispatch();
    const [{isLoading,APIdata,err}]=useFetchQuestion();
    const idx=useSelector(state=>state.questions.qIdx);
    const [checked,setChecked]=useState(null);
    // const[isChanged, setIsChanged]=useState(false);

    React.useEffect(()=>{
        //console.log(isLoading)
        // console.log(APIdata)
        // console.count("msi")
        dispatch(updateResult({idx,checked})) //sending an object as an action 
    })
    const q=useSelector(state=>state.questions.quesData[state.questions.qIdx]);
    const index=useSelector(state=>state.questions.qIdx)
    
    // useEffect(()=>{
    //     console.log(q)
    // })

    function handleChange(i){
        console.log(i);
        selectOption(i);
        setChecked(i);
    }
    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(err){
        return <h2>{err||"SERVER ERROR"}</h2>
    }
    return (
        <div id="question">
        {/* ? after q makes sure that q has been resolved and only then the certain specified values are passed */}
        <h2>{q?.question}</h2> 
            <ul key={q?.id}>
            {q?.options.map((option,idx)=>{
                return (<li>
                            <input type="radio" id={`option${idx+1}`} name="option" onChange={()=>handleChange(idx)}/>
                            <label htmlFor={`option${idx+1}`}>{option}</label>
                        </li>)
            })}
            </ul>
        </div>
    )
}


export default Question;
