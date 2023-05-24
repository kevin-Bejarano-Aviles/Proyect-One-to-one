import { Entity, PrimaryColumn, Column, ManyToOne} from 'typeorm';
import { Meeting } from './';

@Entity()
export class FollowUp {

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
        nullable:false
    })
    fu_date!:Date


    @ManyToOne(()=>Meeting,(meeting)=>meeting.followUps,{
        nullable:false,
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
    })
    meeting!:Meeting

}