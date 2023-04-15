import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link,Navigate} from "react-router-dom";
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
    const score=result.length!==0&&result.map((item,index)=>(answers[index]===item)).map(item=>item*points).reduce((prev,current)=>prev+current); 
    //   userId:{
    //     type:String
    // },
    // result:{
    //     type:Array,
    //     default:[]
    // },
    // points:{
    //     type:Number,
    //     default:0
    // },
    // attempted:{
    //     type:Number,
    //     default:0
    // },
    // outcome:{
    //     type:String,
    //     default:' '
    // }
    (async()=>{
        const savedResult=await axios.post("http://localhost:8000/api/results/add",{userId:userId,result:result,points:score,attempted:attempted,outcome:score>=(totalPoints*50/100)?"Passed":"Failed"},data=>data)
        console.log(savedResult)
    })();
    function handleRestart(){
        dispatch(resetQues());
        dispatch(resetResult());
    }
    return userId?(
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
    </div>):<Navigate to="/" replace={true}></Navigate>
    
}

export default Result;
