import { Request, Response } from "express";
import { logger } from '../shared/infra/logger';
import { MeetingDTO } from '../interfaces/bodyInterfaces';
import { createMetting, findAllMetting, findOneMetting } from '../metodos/meetingMethods';
import { findOneUser } from '../metodos/userMethods';
import { findAllActionable } from "../metodos/actionablesMethods";

export const newMeeting = async(req:Request,res:Response) =>{
    try {
        const {owner:ownerId,attendee:attendeeId,title} = req.body as MeetingDTO;

        const owner = await findOneUser(ownerId);

        const attendee = await findOneUser(attendeeId);

        if (!attendee || !owner ) {
           return res.status(404).json({
                msg: `El usuario no se encuentra en la base de datos`
           });
        }

        await createMetting(owner,attendee,title);

        return res.status(200).json({
            msg: 'Meeting creada',
        });

    } catch (error) {
        logger.error(error as string);
    }
}

export const allMeetings = async(req:Request,res:Response) => {
    try {
        const meetings = (await findAllMetting());
        
        return res.status(200).json({
            meetings
        })

    } catch (error) {
        logger.error(error as string);
    }
}

export const oneMeeting = async(req:Request,res:Response) => {
    try {
        const { id } = req.params;

        const meeting = await findOneMetting(id);

        if (!meeting) {
            return res.status(404).json({
                msg: `meeting with id ${id} not found`
            });
        }
        return res.status(200).json({
            meeting
        })

    } catch (error) {
        logger.error(error as string);
    }
}