import { Router } from "express";
import { allActionables, newActionable } from '../../../../controllers/actionable.controller';

const actionableRouter = Router();


actionableRouter.post('/',newActionable);
actionableRouter.get('/:id',allActionables)


export default actionableRouter;