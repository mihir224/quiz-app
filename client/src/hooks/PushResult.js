import { pushResult } from "../redux/resultSlice"

export const PushRes=(index)=>async(dispatch)=>{ //we return a separate function from this function because we cannot call useDispatch inside a function directly. Thus to access the dispatch function within this funciton, we have to use another function, pass dispatch as an argument to it, and then dispatch the action
    try{
        await dispatch(pushResult(index)) //this index is the index value of the option selected by the user for a particular question 
    }catch(err){
        console.log(err)
    }
}