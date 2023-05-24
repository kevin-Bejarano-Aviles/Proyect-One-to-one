import mysql from "../shared/infra/mysql/index";
import { Meeting, User } from "../entity"
import { v4 as uuid } from 'uuid';


const dataTypeOrm = mysql.data();

export const createMetting  = async(owner:User,attendee:User,topics:string) => {
    const meeting = dataTypeOrm.manager.create(Meeting,{
        id: uuid(),
        owner,
        attendee,
        topics
    });

    await dataTypeOrm.manager.save(meeting);

    return meeting;
}

export const findAllMetting  = async() => {
    const meetings = await dataTypeOrm.manager.find(Meeting,{
        relations:{
            owner:true,
            attendee:true,
        }
    });

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
        }
    })

    return meeting;
}

export const updateMetting  = async(id:string,topics:string) => {
//modificar el topics, quitar o añadir los accionables
    await dataTypeOrm.manager.update(Meeting,id,{
        topics,
    })
}
// crear un metodo en api controller que solo ver los actionables de una meeting y actualizar o eliminar los actionables de que esten ligadas a esa meeting
export const deleteMetting  = async(id:string) => {
    await dataTypeOrm.manager.delete(Meeting,id);
}