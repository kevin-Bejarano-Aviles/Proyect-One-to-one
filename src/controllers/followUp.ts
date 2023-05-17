import { Request, Response } from "express";
import { FollowUp } from "../entity/FollowUp";
import { v4 as uuid } from 'uuid';
import { MysqlDataSource } from "../data/data-source";
import { User } from "../entity/User";
import { returnDateFormat } from "../helpers/convertidorFecha";
import { Actionables } from "../entity/Actionables";


/* const createOwner = async()=>{
    const user = await MysqlDataSource.getRepository(User).create({
        id:uuid(),
        name:'Oscar',
        last_name:'Eberle'
    })
    console.log(user); 
    return user;
    
}
const createAttendee = async()=>{
    const user = await MysqlDataSource.getRepository(User).create({
        id:uuid(),
        name:'Kevin',
        last_name:'Aviles'
    })
    console.log(user); 
    return user;
}

const createPersons = async(req:Request,res:Response)=>{
    try {
        await createOwner()
        await createAttendee()
        res.send('Personas creadas weon')
    } catch (error) {
        console.log(error);
    }
} */
/* const findUser = async(id:string)=>{
    const ownerExists = await MysqlDataSource.getRepository(User).findOne({
        where:{
            id: id
        }
    })
    return ownerExists;
}


const newFollowUp = async(req:Request,res:Response) =>{
    try {
        // await createOwner();
        // await createAttendee()
        const { owner,atendee,topics, temperature,actionables } = req.body;
        const newOwner = findUser(owner);
        if( newOwner === null) {
            return res.send('no existe')
        }
        const followUp = await MysqlDataSource.getRepository(FollowUp).create({
            id:uuid(),
            owner:newOwner,
            attendee:atendee,
            topics,
            temperature,
            date: returnDateFormat(),

        });
        const actionable = await MysqlDataSource.getRepository(Actionables).create({
            id:uuid(),
             followup_id:followUp,
             owner:
        })

    } catch (error) {
        console.log(error);
    }
} */


export const createUser = async(req:Request,res:Response)=>{
    const {name,last_name} = req.body;
    const user = await MysqlDataSource.getRepository(User).create({
        id:uuid(),
        name,
        last_name
    })
    await MysqlDataSource.manager.save(user);
    return res.json({
        user
    })
}

export const createFollowUp = async(req:Request,res:Response)=>{
    try {
        const {ownerid,attendeeid,topics,temperature}= req.body;
        console.log(returnDateFormat());
        
        const followUp = await MysqlDataSource.manager.create(FollowUp,{
            id:uuid(),
            owner:ownerid,
            attendee:attendeeid,
            date:new Date(),
            topics:topics,
            temperature:temperature
    
        })
        await MysqlDataSource.manager.save(followUp);
        return res.json({
            followUp
        })    
    } catch (error) {
        res.json(error)
        console.log(error);
    }

}

export const metodoImportante = async(req:Request,res:Response)=>{
    try {
        const {owner:ownerId,atendee:atendeeId,topics,temperature,actionables} = req.body;
        const attendeeOwner = await MysqlDataSource.manager.findOne(User,{
            where:{
                id: atendeeId
            }
        });
        const ownerTrue = await MysqlDataSource.manager.findOne(User,{
            where: {
                id:ownerId 
            }
        })
        const followUp = await MysqlDataSource.manager.create(FollowUp,{
            id:uuid(),
            owner:ownerTrue!,
            attendee:attendeeOwner!,
            date:new Date(),
            topics:topics,
            temperature:temperature
    
        })
        await MysqlDataSource.manager.save(followUp);
        const actionable = await MysqlDataSource.manager.create(Actionables,{
            id:uuid(),
            followup_id: followUp,
            task: actionables.task,
            owner: attendeeOwner!,
            due_date: actionables.due_date,
            completed_date: actionables.completed_date,
        })
        await MysqlDataSource.manager.save(actionable);
        return res.json({
            actionable
        })
    } catch (error) {
        res.json(error)
        console.log(error);
    }
}   