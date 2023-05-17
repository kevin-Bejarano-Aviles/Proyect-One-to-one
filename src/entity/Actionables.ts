import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import { FollowUp } from './FollowUp'
import { User } from './User'

@Entity()
export class Actionables {
    @PrimaryColumn({
        type:'uuid'
    })
    id!:string


    @ManyToOne(()=> FollowUp,(followup_id)=>followup_id.actionable)
    followup_id!:FollowUp


    @Column({
        type:'varchar',
        length:255
    })
    task!:string

    @ManyToOne(()=>User,(owner)=>owner.actionable)
    owner!:User



    @Column({
        type:'date',
    })
    due_date?:Date

    @Column({
        type:'timestamp'
    })
    completed_date?:Date    
}