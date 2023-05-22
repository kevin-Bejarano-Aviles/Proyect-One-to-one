import { Request, Response } from "express";
import { FollowUp } from "../entity/FollowUp";
import { v4 as uuid } from 'uuid';
import { MysqlDataSource } from "../data/data-source";
import { User } from "../entity/User";
import { Actionables } from "../entity/Actionables";
import { findOneUser } from "../metodos/userMethods";
import { createFollowUp } from "../metodos/followUpControllerMethods";
import { createActionable } from "../metodos/actionablesMethods";


export const createUser = async(req:Request,res:Response)=>{
    /* const {name,last_name} = req.body;
    const user =  MysqlDataSource.getRepository(User).create({
        id:uuid(),
        name,
        last_name
    })
    await MysqlDataSource.manager.save(user);
    return res.json({
        user
    }) */
}


interface NewFollowUpApiBody {
    owner: string;
    attendee: string;
    topics:string;
    temperature:number;
    actionables:ActionableFieldsApi
}
interface ActionableFieldsApi {
    task:string;
    owner: User;
    due_date: Date;
    completed_date:Date;
}

export const newFollowUp = async(req:Request,res:Response) =>{
  /*   try {
        const {
            owner:ownerId,
            attendee:atendeeId,
            topics,
            temperature,
            actionables
        } = req.body as NewFollowUpApiBody;
        
        const attendee = await findOneUser(atendeeId);
        const owner = await findOneUser(ownerId);

        if(attendee === null || owner === null){
            return res.status(404).json({
                msg: 'User not found'
            })
        }
        
        const followUp = await createFollowUp(owner,attendee,topics,temperature);

        const {task,due_date,completed_date} = actionables;
        //update en meeting y actionable
        const actionable = await createActionable(
            followUp,
            task,
            attendee,
            due_date,
            completed_date);
        
        return res.status(200).json({
            laReu: followUp,
            laAccion: actionable,
            msg: ' FollowUp and actionable created '
        })


    } catch (error) {
        res.json(error)
        console.log(error);
    } */
}