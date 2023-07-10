import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { ActionablesSchema} from './actionable.schema';
import { MeetingSchema } from './meeting.schema';
import { User } from 'domain/entities/User';
import { Meeting } from 'domain/entities/Meeting';
import { Actionable } from 'domain/entities/Actionable';


@Entity()
export class UserSchema implements User {

    @PrimaryColumn({
        type:'uuid'
    })
    id!:string


    @Column({
        type:'varchar',
        length:255,
        nullable:false
    })
    name!:string

    @Column({
        type:'varchar',
        length:255,
        nullable:false
    })
    lastName!:string;

    @OneToMany( ()=> MeetingSchema,(ownerMetting)=> ownerMetting.owner )
    ownerMetting?:Meeting[];

    @OneToMany( ()=>MeetingSchema,(attendee)=>attendee.attendee )
    attendeeMetting?:Meeting[];

    @OneToMany(()=> ActionablesSchema,(actionables)=>actionables.owner)
    actionables?:Actionable[]
}