import { Router } from "express";
import followUpRouter from '../routes/followUp'
const router = Router();

router.use('/follow-up', followUpRouter)

export default router;