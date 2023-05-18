import { Router } from "express";
import { createUser, newFollowUp } from '../controllers/followUp';
const router = Router();


router.post('/',newFollowUp);
router.post('/crear-user',createUser);

export default router;