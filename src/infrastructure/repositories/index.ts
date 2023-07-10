import mysql from "shared/infra/mysql";
import MySqlMeetingRepository from "./MySqlMeetingRepository";
import { MeetingSchema } from "infrastructure/schemas/meeting.schema";
import { UserSchema } from "infrastructure/schemas/user.schema";
import { MySqlUserRepository } from "./MySqlUserRepository";

const mySqlMeetingSchema = mysql.dataMysql().getRepository(MeetingSchema)
const mySqlUserSchema = mysql.dataMysql().getRepository(UserSchema)

export const mySqlMeetingRepository = new MySqlMeetingRepository(mySqlMeetingSchema);
export const mySqlUserRepository = new MySqlUserRepository(mySqlUserSchema);