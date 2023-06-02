import { Router } from "express";
import meetingRouter from './meeting.routes'
import followUpRouter from './follow_up.routes';
import actionableRouter from './actionable.routes';
import userRouter from './user.routes';


const router = Router();

router.use('/user',userRouter);
router.use('/meeting', meetingRouter);
router.use('/follow-up',followUpRouter);
router.use('/actionable',actionableRouter);

export default router;