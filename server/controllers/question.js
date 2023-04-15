import Question from "../models/Question.js"
import {data,answers} from "../sample-data/data.js"
export const getQues = async (req,res)=>{
    try{
        const q=await Question.find();
        res.status(200).json(q);
    }catch(err){
        res.json(err)
    }
}
export const addQues=async(req,res)=>{
    // const newQuestion=new Question({...req.body})
    try{
        // const savedQuestion=await newQuestion.save();
        // res.status(200).json(savedQuestion);
        await Question.insertMany({questions:data,answers:answers});
        res.status(200).json("questions saved")
    }catch(err){
        res.json(err)
    }
}
export const deleteQues=async(req,res)=>{
    try{
        await Question.deleteMany();
        res.status(200).json("questions deleted")
    }catch(err){
        console.log(err)
    }
}