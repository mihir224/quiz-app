import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import { setUserId } from "../redux/resultSlice";
import "../styles/Home.css";

function Home(){
    const dispatch=useDispatch();
    const inputRef=useRef(null);
    function handleClick(){
        if(inputRef.current.value!==null){
            dispatch(setUserId(inputRef.current?.value));
        }
    }
    return(
        <div id="home">
            <h1>Quiziosity</h1>
            <figure id="fig" > 
                <figcaption><h2>Instructions</h2></figcaption>
                <ul id="instructions">
                    <li>The quiz consists of 10 questions.</li>
                    <li>Each question has 5 points for correct answer and 0 points for incorrect answer.</li>
                    <li><span style={{fontWeight:"bold"}}>Passing criteria</span>: Score should be more than 50%.</li>
                    <li>You can re-take the test as many times as you like.</li>
                </ul>
            </figure>       
           <div id="form">
                <input ref={inputRef} type="text" placeholder="Username" required></input>
                <Link to="quiz"><button id="start-btn" type="submit" onClick={handleClick}>Start</button></Link>
         </div>
        </div>
    )
}

export default Home;
