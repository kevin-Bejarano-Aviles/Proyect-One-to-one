import { Router } from "express";
import meetingRouter from './meeting.routes'
const router = Router();
//TODO cambiar a meeting

router.use('/meeting', meetingRouter)

export default router;