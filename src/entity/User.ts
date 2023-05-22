import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Actionables, Meeting } from './';



@Entity()
export class User {

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
    last_name!:string;

    @OneToMany( ()=> Meeting,(ownerMetting)=> ownerMetting.owner )
    ownerMetting?:Meeting[];

    @OneToMany( ()=>Meeting,(attendee)=>attendee.attendee )
    attendeeMetting?:Meeting[];

    @OneToMany(()=> Actionables,(actionables)=>actionables.owner)
    actionables?:Actionables[]
}