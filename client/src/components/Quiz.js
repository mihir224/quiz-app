import React, { useState } from "react";
import Question from "./Question";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { moveNext, movePrev } from "../redux/quesSlice";
import { UpdateRes } from "../hooks/UpdateResult";
import { set } from "mongoose";

function Quiz(){
    const dispatch=useDispatch();
    const[sub,setSub]=useState(false);
    const [resultIndex,setResultIndex]=useState(null);
    const idx= useSelector(state=>state.questions.qIdx);
    const questions= useSelector(state=>state.questions.quesData)
    const result=useSelector(state=>state.result.result)
    React.useEffect(()=>{
        console.log(result)
    })
    function handleNext(){
        setSub(true);
        if(idx<questions.length){
            dispatch(moveNext());
            dispatch(UpdateRes(1))
        }
    }
    function handlePrev(){
        if(idx>0){
            dispatch(movePrev());
        }
    }
    function selectOption(index){
        setResultIndex(index);
    }
    return (  
        <div id="quiz">
        <Question selectOption={selectOption}/>
            <div>
                <button type="button" onClick={handlePrev}>Prev</button>
                <button type="button" onClick={handleNext}>Next</button>
            </div>
            <Link to="/result"><button style={{display:sub?"content":"none"}} type="submit">Submit</button></Link>
        </div>
    )
}

export default Quiz;
