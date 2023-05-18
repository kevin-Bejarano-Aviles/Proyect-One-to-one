import { MysqlDataSource } from "../data/data-source";
import { Actionables, FollowUp , User } from "../entity";
import { v4 as uuid } from 'uuid';



export const createActionable =async(followup:FollowUp,task:string,owner:User,due_date:Date,completed_date:Date)=>{
    const actionable = MysqlDataSource.manager.create(Actionables,{
        id: uuid(),
        followup_id:followup,
        task,
        owner,
        due_date:new Date(due_date),
        completed_date: new Date(completed_date)
    })
    await MysqlDataSource.manager.save(actionable);
    return actionable;
    
}
export const findAllActionable =async()=>{
    const allActionables = await MysqlDataSource.manager.find(Actionables);
    return allActionables;
}
export const findOneActionable =async(id:string)=>{
    const actionable = await MysqlDataSource.manager.findOne(Actionables,{
        where:{
            id
        }
    });
    return actionable;
}
export const updateActionable =async()=>{

}
export const deleteActionable = async()=>{

}