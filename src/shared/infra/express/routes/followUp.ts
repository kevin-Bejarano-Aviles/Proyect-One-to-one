import { Router } from "express";
import { newFollowUp } from '../../../../controllers/followUp';
const followUpRouter = Router();

followUpRouter.post('/', newFollowUp);

export default followUpRouter;