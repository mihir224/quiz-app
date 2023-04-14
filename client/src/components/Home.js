import React from "react";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import { setUserId } from "../redux/resultSlice";

function Home(){
    const dispatch=useDispatch();
    const inputRef=React.useRef(null);
    function handleClick(){
        if(inputRef.current.value!==null){
            dispatch(setUserId(inputRef.current?.value));
        }
    }
    return(
        <div id="home">
            <h1>Quiz-App</h1>
            <form id="form">
                <input ref={inputRef} type="text" placeholder="Username" required></input>
                <Link to="quiz"><button type="submit" onClick={handleClick}>Start</button></Link>
            </form>
        </div>
    )
}

export default Home;
