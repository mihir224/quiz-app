import React, { useState } from "react";
import Question from "./Question";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { moveNext, movePrev } from "../redux/quesSlice";
import { PushRes } from "../hooks/PushResult";
import {Navigate} from "react-router-dom"; //to navigate the user to result page once he answers the last question

function Quiz(){
    const dispatch=useDispatch();
    const [resultIndex,setResultIndex]=useState (undefined);
    const state=useSelector(state=>state);
    const idx=useSelector(state=>state.questions.qIdx);
    const questions=useSelector(state=>state.questions.quesData)
    const result=useSelector(state=>state.result.result)
    React.useEffect(()=>{
       // console.log(result)
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
    return (  
        <div id="quiz">
        <Question selectOption={selectOption}/>
            <div>
                {idx>0?<button type="button" onClick={handlePrev}>Prev</button>:<div></div>}
                <button type="button" onClick={handleNext}>Next</button>
            </div>
            {idx>=questions.length-1&&<Link to="/result"><button type="submit">Submit</button></Link>}
        </div>
    )
}

export default Quiz;
