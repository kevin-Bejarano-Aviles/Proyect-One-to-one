import { MysqlDataSource } from "../data/data-source"
import { User } from "../entity/User"
import { v4 as uuid } from 'uuid'


export const createUser =async(name:string,last_name:string)=>{
    /* const user = MysqlDataSource.manager.create(User,{
        id: uuid(),
        name,
        last_name
    });
    await MysqlDataSource.manager.save(user);
    return user; */
}
export const findAllUser =async()=>{
    /* const users = await MysqlDataSource.manager.find(User);
    return users; */
}
export const findOneUser =async(id:string)=>{
   /*  const user = await MysqlDataSource.manager.findOne(User,{
        where:{
            id
        }
    }); */
    /* if( user === null ){
        throw new Error("Not found");
    } */
   /*  return user; */
}
export const updateUser =async()=>{

}
export const deleteUser = async()=>{

}