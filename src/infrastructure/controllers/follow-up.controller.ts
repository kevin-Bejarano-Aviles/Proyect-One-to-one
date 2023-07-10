import { Request, Response } from 'express';
import { logger } from '../../shared/infra/logger';
import { FollowUpDTO } from '../../interfaces/bodyInterfaces';
import { findOneMetting, updateMetting } from '../../metodos/meetingMethods';
import { createFollowUp } from '../../metodos/followUpMethods';


export const newFollowUp = async(req:Request,res:Response) => {
    try {
        const {temperature,meeting_id,topic} = req.body as FollowUpDTO;

        const meeting = await findOneMetting(meeting_id);

        if(!meeting){
            return res.status(404).json({
                msg: `Meeting not found`
            });
        }

        await createFollowUp(temperature,meeting);

        await updateMetting(meeting_id,topic);

        return res.status(201).json({
            msg: 'follow up created'
        });

    } catch (error) {
        logger.error(error as string)
    }
}