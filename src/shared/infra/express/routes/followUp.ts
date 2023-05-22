import { Router } from "express";
import { newFollowUp } from '../../../../controllers/followUp';
const followUpRouter = Router();

followUpRouter.post('/', newFollowUp);
followUpRouter.get('/', (req, res) => {
    res.send("WELCOME!")
})

export default followUpRouter;