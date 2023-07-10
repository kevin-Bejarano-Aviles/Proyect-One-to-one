import { Entity, PrimaryColumn, Column, ManyToOne} from 'typeorm';
import { MeetingSchema } from './meeting.schema';

@Entity()
export class FollowUpSchema {

    @PrimaryColumn({
        type:'uuid'
    })
    id!:string

    @Column({
        type:'int',
        nullable:true
    })
    temperature?:number;


    @Column({
        type:'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        nullable:false
    })
    fu_date!:Date


    @ManyToOne(()=>MeetingSchema,(meeting)=>meeting.followUps,{
        nullable:false,
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
    })
    meeting_id!:MeetingSchema

}