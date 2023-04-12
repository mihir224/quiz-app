import React from "react";
import Question from "./Question";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { moveNext, movePrev } from "../redux/quesSlice";


function Quiz(){
    const dispatch=useDispatch();
    const[ques,setQues]=React.useState(0); 
    const[sub,setSub]=React.useState(false);
    const idx= useSelector(state=>state.questions.qIdx);
    const questions= useSelector(state=>state.questions.quesData)
    React.useEffect(()=>{
        console.log(idx)
    })
    function handleNext(){
        setSub(true);
        if(idx<questions.length-1){
            dispatch(moveNext());
        }
        
    }
    function handlePrev(){
        if(idx>0){
            dispatch(movePrev());
        }
    }
    return (  
        <div id="quiz">
        <Question/>
            <div>
                <button type="button" onClick={handlePrev}>Prev</button>
                <button type="button" onClick={handleNext}>Next</button>
            </div>
            <Link to="/result"><button style={{display:sub?"content":"none"}} type="submit">Submit</button></Link>
        </div>
    )
}

export default Quiz;
