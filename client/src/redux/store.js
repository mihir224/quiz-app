import { combineReducers,configureStore } from "@reduxjs/toolkit";
import quesReducer from "./quesSlice";
import resultReducer from "./resultSlice";

const rootReducer=combineReducers({
    questions:quesReducer,
    result:resultReducer
})

export default configureStore({
    reducer:rootReducer
})