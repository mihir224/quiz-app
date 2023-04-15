import express from "express";
import { addQues, deleteQues, getQues } from "../controllers/question.js";

const router=express.Router();

router.get('category',getQues)
router.post('add',addQues)
router.delete('delete',deleteQues)

export default router;
