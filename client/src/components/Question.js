import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useFetchQuestion } from "../hooks/FetchQuestion"; //this custom hook is basically used to initialise the state of questions with the questions data

function Question(){
    const [{isLoading,APIdata,err}]=useFetchQuestion();
    React.useEffect(()=>{
        //console.log(isLoading)
        // console.log(APIdata)
        // console.count("msi")
    })
    const q=useSelector(state=>state.questions.quesData[state.questions.qIdx]);
    const index=useSelector(state=>state.questions.qIdx)
    
    // useEffect(()=>{
    //     console.log(q)
    // })

    function handleChange(){
        console.log("clicked")
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
                            <input type="radio" id={`option${idx+1}`} name="option" onChange={handleChange}/>
                            <label htmlFor={`option${idx+1}`}>{option}</label>
                        </li>)
            })}
            </ul>
        </div>
    )
}


export default Question;
