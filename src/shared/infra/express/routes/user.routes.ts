import { Router } from "express";
import { newUser } from '../../../../controllers/user.controller';

const userRouter = Router();


userRouter.post('/',newUser);
userRouter.get('/', (req, res) => {
    res.send("WELCOME!")
})


export default userRouter;