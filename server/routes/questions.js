import express from "express";
import { addQues, deleteQues, getQues } from "../controllers/question.js";

const router=express.Router();

router.get('/find',getQues)
router.post('/add',addQues)
router.delete('/delete',deleteQues)

export default router;
