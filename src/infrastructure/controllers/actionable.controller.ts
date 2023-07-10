import { Request, Response } from 'express';
import { logger } from '../../shared/infra/logger';
import { ActionableDTO } from '../../interfaces/bodyInterfaces';
import { createActionable, findAllActionable } from '../../metodos/actionablesMethods';
import { findOneMetting } from '../../metodos/meetingMethods';
import { findOneUser } from '../../metodos/userMethods';


export const newActionable = async(req:Request,res:Response) => {
    try {
        const { meeting_id,task,owner:ownerId,due_date} = req.body as ActionableDTO;

        const meeting = await findOneMetting(meeting_id);
        const owner = await findOneUser(ownerId);

        if(!meeting){
            return res.status(404).json({
                msg: `Meeting not found`
            });
        }
        if(!owner){
            return res.status(404).json({
                msg: 'User not found'
            });
        }
        await createActionable(meeting,task,owner,due_date);

        return res.status(200).json({
            msg: 'new Actionable created'
        });

    } catch (error) {
        logger.error(error as string)
    }
}

export const allActionables = async(req:Request,res:Response)=>{
    try {
        const {id} = req.params;

        const actionables = await findAllActionable(id);

        res.json(actionables)
    } catch (error) {
        logger.error(error as string)
    }
}