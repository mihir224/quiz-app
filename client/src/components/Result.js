import React from "react";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import { resetQues } from "../redux/quesSlice";
import { resetResult } from "../redux/resultSlice";

function Result(){
    const dispatch=useDispatch();
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
                <span>10</span>
            </div>
            <div className="result-items">
                <span>Attempted:</span>
                <span>5</span>
            </div>
            
            <div className="result-items">
                <span>Score:</span>
                <span>20/40</span>
            </div>
            <div className="result-items">
                <span>Result:</span>
                <span>Passed</span>
            </div>
        </div>
        <Link to="/"><button type="button" onClick={handleRestart}>Tap to restart</button></Link>
    </div>
    )
}

export default Result;
