import mysql from "../shared/infra/mysql/index";
import { FollowUp, Meeting } from "../entity";
import { v4 as uuid } from 'uuid';


const dataTypeOrm = mysql.dataMysql();

export const createFollowUp =async(temperature:number,meeting:Meeting)=>{
    const followUp = dataTypeOrm.manager.create(FollowUp,{
        id:uuid(),
        temperature,
        meeting_id:meeting
    });

    await dataTypeOrm.manager.save(followUp);

    return followUp;
}
export const findAllFollowUp =async()=>{
    const allFollowUp = await dataTypeOrm.manager.find(FollowUp,{
        relations:{
            meeting_id:true
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
            meeting_id:true
        }
    });
    return followUp;
}
export const updateFollowUp =async(id:string,temperature:number)=>{
    await dataTypeOrm.manager.update(FollowUp,id,{
        temperature
    });
}
export const deleteFollowUp = async(id:string)=>{
    await  dataTypeOrm.manager.delete(FollowUp,id);
}