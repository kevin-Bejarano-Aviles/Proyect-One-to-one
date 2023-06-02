import mysql from "../shared/infra/mysql/index";
import { Meeting, User } from "../entity"
import { v4 as uuid } from 'uuid';

const dataTypeOrm = mysql.dataMysql();

export const createMetting  = async(owner:User,attendee:User,title:string) => {
    const meeting = dataTypeOrm.manager.create(Meeting,{
        id: uuid(),
        owner,
        attendee,
        title
    });

    await dataTypeOrm.manager.save(meeting);

    return meeting;
}

export const findAllMetting  = async() => {
    const meetings = await dataTypeOrm.manager.find(Meeting,
        {
            relations:{
                owner:true,
                attendee:true,
            }
        }
    );

    return meetings;
}

export const findOneMetting  = async( id:string ) => {

    const meeting = await dataTypeOrm.manager.findOne(Meeting,{
        where:{
            id
        },
        relations:{
            owner:true,
            attendee:true,
            actionables:{
                owner:true
            }
        }
    })

    return meeting;
}

export const updateMetting  = async(id:string,topics?:string,title?:string) => {
    await dataTypeOrm.manager.update(Meeting,id,{
        topics,
        title
    });
}

export const deleteMetting  = async(id:string) => {
    await dataTypeOrm.manager.delete(Meeting,id);
}