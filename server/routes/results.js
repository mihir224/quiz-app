import express from "express";
import { addResult, deleteResult, getResult } from "../controllers/result.js";

const router=express.Router();

router.get('/:userId',getResult)
router.post('/add',addResult)
router.delete('/delete',deleteResult)

export default router;
