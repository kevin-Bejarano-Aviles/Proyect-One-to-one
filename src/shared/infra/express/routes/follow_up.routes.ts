import { Router } from "express";
import { newFollowUp } from '../../../../infrastructure/controllers/follow-up.controller';

const followUpRouter = Router();


followUpRouter.post('/',newFollowUp);
followUpRouter.get('/', (req, res) => {
    res.send("WELCOME!")
})


export default followUpRouter;