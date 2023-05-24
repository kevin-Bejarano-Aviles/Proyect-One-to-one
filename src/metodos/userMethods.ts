
import mysql from "../shared/infra/mysql/index";
import { User } from "../entity/User";
import { v4 as uuid } from 'uuid';

const dataTypeOrm =  mysql.data();

export const createUser =async(name:string,last_name:string)=>{
    const user = dataTypeOrm.manager.create(User,{
        id: uuid(),
        name,
        last_name
    });
    await dataTypeOrm.manager.save(user);
    return user;
}
export const findAllUser =async()=>{
    const users = await dataTypeOrm.manager.find(User);
    return users;
}
export const findOneUser =async(id:string)=>{
    const user = await dataTypeOrm.manager.findOne(User,{
        where:{
            id
        }
    });
    return user;
}
export const updateUser =async(id:string,name:string,last_name:string)=>{
    await dataTypeOrm.manager.update(User,id,{name:name,last_name:last_name});
}
export const deleteUser = async(id:string)=>{
    await dataTypeOrm.manager.delete(User,id)
}