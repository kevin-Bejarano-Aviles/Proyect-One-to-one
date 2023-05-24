import mysql from "../shared/infra/mysql/index";
import { FollowUp, Meeting } from "../entity";
import { v4 as uuid } from 'uuid';


const dataTypeOrm = mysql.data();

export const createFollowUp =async(temperature:number,fu_date:Date,meeting:Meeting)=>{
    const followUp = dataTypeOrm.manager.create(FollowUp,{
        id:uuid(),
        temperature,
        fu_date:new Date(fu_date),
        meeting
    });

    await dataTypeOrm.manager.save(followUp);

    return followUp;
}
export const findAllFollowUp =async()=>{
    const allFollowUp = await dataTypeOrm.manager.find(FollowUp,{
        relations:{
            meeting:true
        }
    });
    return allFollowUp;
}
export const findOneFollowUp =async(id:string)=>{
    const followUp = await dataTypeOrm.manager.findOne(FollowUp,{
        where:{
            id
        },
        relations:{
            meeting:true
        }
    });
    return followUp;
}
export const updateFollowUp =async()=>{
//modificar el topics, quitar o añadir los accionables
}
export const deleteFollowUp = async(id:string)=>{
    await  dataTypeOrm.manager.delete(FollowUp,id);
}