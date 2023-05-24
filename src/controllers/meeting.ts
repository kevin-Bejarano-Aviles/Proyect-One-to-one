import { Request, Response } from "express";
import { ActionableFieldsApi, NewFollowUpApiBody } from '../interfaces/bodyInterfaces';
import {createUser, findOneUser, updateUser } from "../metodos/userMethods";
import { createActionable, createManyActionables, deleteActionable, findAllActionable } from "../metodos/actionablesMethods";
import { createMetting, findOneMetting } from "../metodos/meetingMethods";
import { createFollowUp } from "../metodos/followUpMethods";


export const newUser = async(req:Request,res:Response)=>{
    try {

        const { name, last_name } = req.body;

        const user = await createUser( name, last_name );

        return res.status(200).json({
            user
        });    
    } catch (error) {
        console.log( error );
        res.status(500).json({
            msg:'SERVER ERROR',
        });
    }
    
}
export const newMeeting = async(req:Request,res:Response) =>{
    try {
        const {
            owner: ownerId,
            atendee: atendeeId,
            topics,
            followUp:followUpBody,
            actionables:actionablesBody,
        } = req.body as NewFollowUpApiBody;

        const owner = await findOneUser(ownerId);
        const atendee = await findOneUser(atendeeId);


        if( owner === null || atendee === null){
            return res.status(404).json({
                msg: 'User not found'
            })
        }
        
        const meeting = await createMetting(owner,atendee,topics);

        const {temperature,fu_date} = followUpBody;
        
        await createFollowUp(temperature,fu_date,meeting);

        await createManyActionables(atendee,meeting,actionablesBody)

        res.status(200).json({
            msg:'si se pudo :D',
        })

        

       
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'SERVER ERROR'
        });
    }
}   

export const prueba = async(req:Request,res:Response)=>{

    try {
        // const {id} = req.params;
        // const allUsers = await findAllActionable();

        res.status(200).json({
            msg:'ta bien',
            // allUsers
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'SERVER ERROR'
        });
    }
}

export const pruebaDelete = async(req:Request,res:Response) =>{
    try {
        const {id} = req.params;

        await deleteActionable(id);

        res.status(200).json({
            msg:'se elimino'
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'SERVER ERROR'
        });
    }
}

export const pruebaUpadate = async(req:Request,res:Response) =>{
    try {
        const {name,last_name} = req.body;
        const {id} = req.params;


        await updateUser(id,name,last_name);

        res.status(200).json({
            msg:'se updateo'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'SERVER ERROR',
        });
    }
}
//cambiar a actioanbleOfMeeting
export const viewActionablesOfMeeting = async(req:Request,res:Response)=>{
    try {
        const {meetingId} = req.params;
        const actionables = await findAllActionable(meetingId);

        res.status(200).json({
            actionables
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'SERVER ERROR',
        });
    }
}

//addActioanblesOfMeeting
export const pruebaUpdateAddActionables = async(req:Request,res:Response)=>{
    try {
        const {meetingId} = req.params;
        const {actionables} = req.body ;

        const actionablesApiBody:ActionableFieldsApi[] = actionables;

        const meeting = await findOneMetting(meetingId);

        if(!meeting) {
            return res.status(404).json({
                msg:'Meeting not found'
            });
        }
        
        await createManyActionables(meeting.attendee,meeting,actionablesApiBody);

        res.status(201).json({
            msg:'Actionables created'
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'SERVER ERROR'
        });
    }
}

