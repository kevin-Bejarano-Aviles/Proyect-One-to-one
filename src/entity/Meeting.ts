import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { User, Actionables, FollowUp } from "./";


@Entity()
export class Meeting {

    @PrimaryColumn({
        type:'uuid',
    })
    id!:string;


    @ManyToOne(()=>User,(owner)=>owner.ownerMetting,{
        nullable:false,
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
    })
    owner!:User;

    @ManyToOne(()=>User,(attendee)=>attendee.attendeeMetting,{
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
    title?:string

    @OneToMany(()=> Actionables,(actionable)=>actionable.meeting_id)
    actionables?:Actionables[];

    @OneToMany(()=>FollowUp,(followUp)=>followUp.meeting_id)
    followUps?:FollowUp[];
}