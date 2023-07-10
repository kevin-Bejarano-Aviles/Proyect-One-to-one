import { Request, Response } from "express";
import { logger } from '../../shared/infra/logger';
import { findAllMetting, findOneMetting } from '../../metodos/meetingMethods';
import { CreateMeetingDTO } from "application/useCases/meeting/create/CreateMeetingUseCase";
import { createMeetingUseCase } from "application/useCases/meeting/create";
import { MeetingNotCreatedError } from "domain/errors/MeetingNotCreatedError";
import { UserNotFoundError } from "domain/errors/UserNotFoundError";
import { findAllMeetingsUseCase } from "application/useCases/meeting/findAll";
import { FindAllMeetingDTO } from "application/useCases/meeting/findAll/FindAllMeetingUseCase";
import { MeetingNotFoundError } from "domain/errors/MeetingNotFoundError";

export const create = async (req: Request, res: Response) =>{
    const result = await createMeetingUseCase.execute(req.body as CreateMeetingDTO)

    if (result.isLeft())
    {
        const error = result.value
        logger.error(error)
        switch (error.constructor) {
            case MeetingNotCreatedError:
                return res.status(422).json({
                    message: error.getError()
                })
            case UserNotFoundError:
                return res.status(404).json({
                    message: error.getError()
                })
            default:
                return res.status(500).json({
                    message: "Error unknown."
                })
        }
    }
    logger.info(result.value.getValue())
    return res.status(201).json({
        message: result.value.getValue()
    })
}

export const findAll = async(req: Request, res: Response) => {
    const { take, skip } = req.body
    if (!take || !skip)
        return res.status(403).json({
            message: "Do not forget to provide 'take' and 'skip' arguments"
        })
    
    const result = await findAllMeetingsUseCase.execute(req.body as FindAllMeetingDTO)
    if (result.isLeft()) {
        const error = result.value
        logger.error(error)
        switch (error.constructor) {
            case MeetingNotFoundError:
                return res.status(422).json({
                    message: error.getError()
                })
            default:
                return res.status(500).json({
                    message: "Error unknown."
                })
        }
    }
    logger.info(result.value.getValue())
    return res.status(200).json({
        message: result.value.getValue()
    })
}

export const findOne = async(req:Request,res:Response) => {
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