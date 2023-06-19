import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import questionRoutes from "./routes/questions.js";
import resultRoutes from "./routes/results.js";

//middleware
const app=express();
dotenv.config();
const connect=()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("DB connected.") 
    }).catch(err=>{ //throw err, if any
        throw err;
    });
}
app.use(express.json()); //data that we have to parse will be in the json format
app.use(cors());
app.use('/api/questions',questionRoutes);
app.use('/api/results',resultRoutes);



const port=process.env.PORT||8000;

app.get('/',(req,res)=>{
    res.send("hi");
})

app.listen(port,()=>{
    connect();
    console.log("server started on port " + port)
})