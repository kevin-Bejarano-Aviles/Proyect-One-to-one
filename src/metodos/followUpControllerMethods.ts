import { MysqlDataSource } from "../data/data-source";
import { FollowUp, User } from "../entity";
import { v4 as uuid } from 'uuid';

export const createFollowUp =async(owner:User,attendee:User,topics:string,temperature:number)=>{
    const followUp = MysqlDataSource.manager.create(FollowUp,{
        id: uuid(),
        owner,
        attendee,
        date:new Date(),
        topics,
        temperature
    });
    await MysqlDataSource.manager.save(followUp);
    return followUp;
}
export const findAllFollowUp =async()=>{
    const allFollowUp = await MysqlDataSource.manager.find(FollowUp);
    return allFollowUp;
}
export const findOneFollowUp =async(id:string)=>{
    const followUp = await MysqlDataSource.manager.findOne(FollowUp,{
        where:{
            id
        }
    });
    return followUp;
}
export const updateFollowUp =async()=>{
//modificar el topics, quitar o añadir los accionables
}
export const deleteFollowUp = async()=>{

}