import mysql from "../shared/infra/mysql/index";
import { Actionables , Meeting, User } from "../entity";
import { v4 as uuid } from 'uuid';
// import { FindManyOptions } from "typeorm";

const dataTypeOrm = mysql.dataMysql();



export const createActionable =async(meeting_id:Meeting,task:string,owner:User,due_date:Date)=>{
    const actionable = dataTypeOrm.manager.create(Actionables,{
        id:uuid(),
        meeting_id,
        task,
        owner,
        due_date:new Date(due_date),
        // completed_date: new Date(completed_date)
    });

    await dataTypeOrm.manager.save(actionable);

    return actionable;

}

export const findAllActionable =async(meetingId:string)=>{
   const actionables = await dataTypeOrm.manager.find(Actionables,{
    where:{
        meeting_id:{
             id:meetingId
        }
    },
    loadRelationIds:{
        relations:['owner'],
        disableMixedMap:true
    },
    relations:{
        owner:true,  
        meeting_id:true
    },
    // relations:{
    //     owner:cosa
    //     /* meeting_id:true */
    // }
   });

   return actionables;

}
export const findOneActionable =async(id:string)=>{
   const actionable = await dataTypeOrm.manager.findOne(Actionables,{
        where:{
            id
        },
        /* loadRelationIds:{
            relations:['owner'],
            disableMixedMap:true
        }, */
        relations:{
            owner:true,
            meeting_id:true
        }
   });
   return actionable;
}
export const updateActionable =async(id:string,task?:string,due_date?:Date,completed_date?:Date)=>{
    await dataTypeOrm.manager.update(Actionables,id,{
        task,
        due_date,
        completed_date
    });

}
export const deleteActionable = async(id:string)=>{
    await dataTypeOrm.manager.delete(Actionables,id);
}