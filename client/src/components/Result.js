import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link,Navigate} from "react-router-dom";
import { resetQues } from "../redux/quesSlice";
import { resetResult } from "../redux/resultSlice";
import "../styles/Result.css"

function Result(){
    const dispatch=useDispatch();
    const {questions:{quesData,answers},result:{userId,result}}=useSelector(state=>state);

    const totalQues=quesData.length;
    const points=5;
    const totalPoints=points*totalQues; //5 points for each ques
    const attempted=result.filter(item=>item!==undefined).length;

    const score=result.length!==0&&result.map((item,index)=>(answers[index]===item)).map(item=>item*points).reduce((prev,current)=>prev+current); 

    (async()=>{
        //https://quiziosity224-api.onrender.com/api/questions/find
        const url=process.env.NODE_ENV==="production"?"https://quiziosity224-api.onrender.com":"http://localhost:8000";
        const savedResult=await axios.post(`${url}/api/results/add`,{userId:userId,result:result,points:score,attempted:attempted,outcome:score>=(totalPoints*50/100)?"Passed":"Failed"},data=>data)
        console.log(attempted)
    })();
    function handleRestart(){
        dispatch(resetQues());
        dispatch(resetResult());
    }
    return userId?(
        <div id="result">
         <h1>Quiziosity</h1>
         <h2>Result</h2>
        <div id="details">
            <div className="result-items">
                <span>Username:</span>
                <span>{userId}</span>
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
                {score>=(totalPoints*50/100)?<span style={{color:"green"}}>Passed</span>:<span style={{color:"red"}}>Failed</span>}
            </div>
        </div>
        <Link to="/"><button type="button" className="quiz-btn" onClick={handleRestart}>Tap to restart</button></Link>
    </div>):<Navigate to="/" replace={true}></Navigate>
    
}

export default Result;
