import "reflect-metadata";
import {DataSource} from 'typeorm';
import dotenv from 'dotenv';
import { FollowUp } from "../entity/FollowUp";
import { Actionables } from "../entity/Actionables";
import { User } from "../entity/User";

dotenv.config()
export const MysqlDataSource = new DataSource({
    type: 'mysql',
    host: '127.0.0.1',//? 'db'
    port:3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    logging: true,
    entities: [FollowUp,Actionables,User],
    migrations: [],
    synchronize:true,
    

})