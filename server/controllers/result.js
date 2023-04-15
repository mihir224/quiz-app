import Result from "../models/Result.js";

export const getResult=async(req,res)=>{
    try{
        const r=await Result.find();
        res.status(200).json(r);
    }catch(err){
        console.log(err)
    }}

export const addResult=async(req,res)=>{
    try{
        const {userId,result,points,attempted,outcome}=req.body;
        if(!userId&&!result){
            throw new Error('No data provided')
        }
        await Result.create({userId,result,points,attempted,outcome})
        res.status(200).json("result saved.")
    }catch(err){
        console.log(err)
    }}

export const deleteResult=async(req,res)=>{
    try{
        await Result.deleteMany();
        res.status(200).json("result deleted")
    }catch(err){
        console.log(err)
    }
}