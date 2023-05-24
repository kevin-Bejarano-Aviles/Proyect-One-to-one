import { Router } from "express";
import { newMeeting} from '../../../../controllers/meeting';
const meetingRouter = Router();


meetingRouter.post('/', newMeeting);
meetingRouter.get('/', (req, res) => {
    res.send("WELCOME!")
})


export default meetingRouter;