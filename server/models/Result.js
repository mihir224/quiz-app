import mongoose from "mongoose";

const ResultSchema=new mongoose.Schema({
    userId:{
        type:String
    },
    result:{
        type:Array,
        default:[]
    },
    points:{
        type:Number,
        default:0
    },
    attempted:{
        type:Number,
        default:0
    },
    outcome:{
        type:String,
        default:' '
    }
},{timestamps:true});

export default mongoose.model("Result",ResultSchema);