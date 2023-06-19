import React from "react";
import { useDispatch } from "react-redux";
import { startQuiz } from "../redux/quesSlice";
import axios from "axios";


export const useFetchQuestion=()=>{ //whenever we define a custom hook, it is necessary to use the 'use' keyword as a prefix to the hook function to tell the react app that it is a custom hook
    const dispatch=useDispatch();
    const [getData,setData]=React.useState({isLoading:false,APIdata:[],err:null})
    React.useEffect(()=>{ 
        setData((prev)=>({ //when we wrap the body of the function in parenthesis, it is not necessary to return anything. Everything inside will be returned automatically
            ...prev, 
            isLoading:true
        }));
        (async()=>{ //defining a anonymous async function to handle the data coming from the backend and calling it simultaneously
            //let questions=await data; //currently await is not necessary as we're storing data locally but it will be necessary when we use a database as we'd have to fetch data from it which would take some time
            try{   
                const [{questions,answers}]=await (await axios.get('http://localhost:8000/api/questions/find')).data;
                if(questions.length>0){
                    setData((prev)=>({
                        ...prev,
                        isLoading:false
                    }))
                    setData((prev)=>({
                        ...prev,
                        APIdata:questions
                    }))
                    dispatch(startQuiz({questions,answers}));
                }
                else{
                    throw new Error("No data available")
                }
            }catch(err){
                setData((prev)=>({
                    ...prev,
                    isLoading:false
                }))
                setData((prev)=>({ //we want this to execute after the isLoading has been set to false and since this is an async function, we write this separately after the isLoading one to execute it after that
                    ...prev,
                    err:err
                }))
            }
        })();
    },[dispatch]); //We passed dispatch as a dependency because everytime the component mounts ie renders, the component code is run again and thus any function inside the component is defined again and again on each render and thereby the function has a new identity on each render. Thus, if we have defined a function outside useEffect() but used it inside it, we have to pass its name as a dependency (following the rules for useEffect()). If we didn't specify anything as a second parameter, the useEffect() would keep running continuosly everytime a state changes 
    return [getData,setData];
}