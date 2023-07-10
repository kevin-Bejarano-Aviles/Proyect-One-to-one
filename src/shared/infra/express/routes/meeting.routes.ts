import { Router } from "express";
import { findAll, create, findOne } from '../../../../infrastructure/controllers/meeting.controller';

const meetingRouter = Router();

meetingRouter.post('/', create);
meetingRouter.get('/', findAll);
meetingRouter.get('/:id', findOne);


export default meetingRouter;