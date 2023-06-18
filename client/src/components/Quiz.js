import React, { useState } from "react";
import Question from "./Question";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { moveNext, movePrev } from "../redux/quesSlice";
import { PushRes } from "../hooks/PushResult";
import {Navigate} from "react-router-dom"; //to navigate the user to result page once he answers the last question
import "../styles/Quiz.css";

function Quiz(){
    const dispatch=useDispatch();
    const [resultIndex,setResultIndex]=useState (undefined);
    const state=useSelector(state=>state);
    const idx=useSelector(state=>state.questions.qIdx);
    const questions=useSelector(state=>state.questions.quesData)
    const user=useSelector(state=>state.result.userId);
    const result=useSelector(state=>state.result.result)
    React.useEffect(()=>{
        console.log(result)
    })
    function handleNext(){
        setResultIndex(undefined) //to make sure that if user didn't select anything, it is saved as undefined in result array
        dispatch(moveNext());
        if(result.length<=idx){ //this makes sure that whenever the user changes a previous ans, the new ans is not saved as a new value is the result array
            dispatch(PushRes(resultIndex));
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
    if(result.length&&result.length>=questions.length){ //array.length==0 evaluates to false so this will not be called if result.length is zero
        return <Navigate to='/result' replace={true} /> //replace here replaces the current route to the passed route
    }
    return user? (   //an empty string returns false ie if there is no user name entered, we will redirect user to home and we do a similar thing with result
        <div id="quiz" style={{textAlign:"center"}}>
         <h1>Quiziosity</h1>
        <Question selectOption={selectOption}/>
            <div id="quiz-btns">
                {idx>0?<button type="button" className="quiz-btn" onClick={handlePrev}>Prev</button>:<div></div>}
                <button type="button" className="quiz-btn" onClick={handleNext}>Next</button>
                {idx>=questions.length-1&&<button className="quiz-btn" type="submit" onClick={handleNext}>Submit</button>}
            </div>
            
        </div>
    ):<Navigate to="/" replace={true}></Navigate>
}

export default Quiz;
