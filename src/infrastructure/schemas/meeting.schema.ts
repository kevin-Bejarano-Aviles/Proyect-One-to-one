import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, BaseEntity } from "typeorm";
import { UserSchema } from "./user.schema";
import { ActionablesSchema } from "./actionable.schema";
import { FollowUpSchema } from "./followup.schema";
import { Meeting } from '../../domain/entities/Meeting'
import { User } from "domain/entities/User";
import { Actionable } from "domain/entities/Actionable";
import { FollowUp } from "domain/entities/FollowUp";

@Entity()
export class MeetingSchema implements Meeting  {

    @PrimaryColumn({
        type:'uuid',
    })
    id!:string;


    @ManyToOne(()=>UserSchema,(owner)=>owner.ownerMetting,{
        nullable:false,
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
    })
    owner!:User;

    @ManyToOne(()=>UserSchema,(attendee)=>attendee.attendeeMetting,{
        nullable: false,
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
    })
    attendee!:User;


    @Column({
        type:'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        nullable:false
    })
    date!:Date;

    @Column({
        type:'longtext',
        nullable:true
    })
    topics?:string;


    @Column({
        type:'varchar',
        nullable:true
    })
    title!: string

    @OneToMany(()=> ActionablesSchema,(actionable)=>actionable.meeting_id)
    actionables?:Actionable[];

    @OneToMany(()=>FollowUpSchema,(followUp)=>followUp.meeting_id)
    followUps?:FollowUp[];
}