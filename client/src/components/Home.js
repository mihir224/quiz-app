import React from "react";
import {Link} from "react-router-dom";

function Home(){
    const inputRef=React.useRef("null");
    
    return (
        <div id="home">
            <h1>Quiz-App</h1>
            <form id="form">
                <input ref={inputRef} type="text" placeholder="Username" required></input>
                <Link to="quiz"><button type="submit">Start</button></Link>
            </form>
        </div>
    )
}

export default Home;
