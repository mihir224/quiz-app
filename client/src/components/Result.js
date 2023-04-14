import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { resetQues } from "../redux/quesSlice";
import { resetResult } from "../redux/resultSlice";

function Result(){
    const dispatch=useDispatch();
    const {questions:{quesData,answers},result:{userId,result}}=useSelector(state=>state);
    useEffect(()=>{
        console.log(score)
    })
    const totalQues=quesData.length;
    const points=5;
    const totalPoints=points*totalQues; //5 points for each ques
    const attempted=result.filter(item=>item!==undefined).length;
    const score=result.map((item,index)=>(answers[index]==item)).map(item=>item*points).reduce((prev,current)=>prev+current); 
    function handleRestart(){
        dispatch(resetQues());
        dispatch(resetResult());
    }
    return (
        <div id="result">
        <div id="details">
            <div className="result-items">
                <span>Username:</span>
                <span>MIHIR SAINI</span>
            </div>
            <div className="result-items">
                <span>Total Questions:</span>
                <span>{totalQues}</span>
            </div>
            <div className="result-items">
                <span>Attempted:</span>
                <span>{attempted}</span>
            </div>
            
            <div className="result-items">
                <span>Score:</span>
                <span>{`${score}/${totalPoints}`}</span>
            </div>
            <div className="result-items">
                <span>Result:</span>
                {score>=(totalPoints*50/100)?<span>Passed</span>:<span>Failed</span>}
            </div>
        </div>
        <Link to="/"><button type="button" onClick={handleRestart}>Tap to restart</button></Link>
    </div>
    )
}

export default Result;
