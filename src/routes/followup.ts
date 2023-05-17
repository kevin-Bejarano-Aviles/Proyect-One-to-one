import { Router } from "express";
import { createFollowUp, createUser, metodoImportante } from "../controllers/followUp";
const router = Router();


router.post('/',metodoImportante);
router.post('/crear-user',createUser);
router.post('/create-follow',createFollowUp);
export default router;