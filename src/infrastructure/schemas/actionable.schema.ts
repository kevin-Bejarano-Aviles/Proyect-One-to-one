import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import { UserSchema } from './user.schema'
import { MeetingSchema } from './meeting.schema'
import { User } from 'domain/entities/User'
import { Actionable } from 'domain/entities/Actionable'


@Entity()
export class ActionablesSchema implements Actionable {
    @PrimaryColumn({
        type:'uuid'
    })
    id!:string      


    @ManyToOne(()=> MeetingSchema,(meeting_id)=>meeting_id.actionables,
        {
            nullable:false,
            onDelete:'CASCADE',
            onUpdate:'CASCADE'
        }
    )
    meeting_id!:MeetingSchema


    @Column({
        type:'varchar',
        length:255
    })
    task!:string

    @ManyToOne(()=>UserSchema,(owner)=>owner.actionables,
        {
            nullable:false,
            onDelete:'CASCADE',
            onUpdate:'CASCADE'
        }
    )
    owner!:User



    @Column({
        type:'timestamp',
        nullable:true
    })
    dueDate?:Date

    @Column({
        type:'timestamp',
        nullable:true
    })
    completedDate?:Date    
}