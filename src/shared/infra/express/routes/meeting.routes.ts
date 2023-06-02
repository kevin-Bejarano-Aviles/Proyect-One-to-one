import { Router } from "express";
import { allMeetings, newMeeting, oneMeeting } from '../../../../controllers/meeting.controller';

const meetingRouter = Router();

meetingRouter.post('/',newMeeting);
meetingRouter.get('/', allMeetings);
meetingRouter.get('/:id',oneMeeting);


export default meetingRouter;