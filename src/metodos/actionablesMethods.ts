import mysql from "../shared/infra/mysql/index";
import { Actionables , Meeting, User } from "../entity";
import { v4 as uuid } from 'uuid';
import { ActionableFieldsApi } from "../interfaces/bodyInterfaces";

const dataTypeOrm = mysql.dataMysql();



export const createActionable =async(meeting_id:Meeting,task:string,owner:User,due_date:Date,completed_date:Date)=>{
    const actionable = dataTypeOrm.manager.create(Actionables,{
        id:uuid(),
        meeting_id,
        task,
        owner,
        due_date:new Date(due_date),
        completed_date: new Date(completed_date)
    });

    await dataTypeOrm.manager.save(actionable);

    return actionable;

}

export const createManyActionables = async(owner:User,followUp:Meeting,actionablesRequest:ActionableFieldsApi[]) =>{
    const actionables:Actionables[] = [];
    
    for (const iterator of actionablesRequest) {
        const actionable = new Actionables();
            actionable.id = uuid();
            actionable.meeting_id = followUp;
            actionable.task = iterator.task;
            actionable.owner = owner;
            actionable.due_date = new Date(iterator.due_date) ;
            actionable.completed_date = new Date(iterator.completed_date);

        actionables.push(actionable);
    }
    const manyActionables = await dataTypeOrm.createQueryBuilder()
        .insert()
        .into(Actionables)
        .values(actionables)
        .execute();


    return manyActionables;
}
export const findAllActionable =async(meetingId:string)=>{
   const actionables = await dataTypeOrm.manager.find(Actionables,{
    where:{
        meeting_id:{
             id:meetingId
        }
    },
    relations:{
        owner:true,
        meeting_id:true
    }
   });

   return actionables;

}
export const findOneActionable =async(id:string)=>{
   const actionable = await dataTypeOrm.manager.findOne(Actionables,{
        where:{
            id
        },
        relations:{
            owner:true,
            meeting_id:true
        }
   });
   return actionable;
}
export const updateActionable =async()=>{

}
export const deleteActionable = async(id:string)=>{
    await dataTypeOrm.manager.delete(Actionables,id);
}