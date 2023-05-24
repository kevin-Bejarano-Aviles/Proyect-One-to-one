import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import { User, Meeting } from './'


@Entity()
export class Actionables {
    @PrimaryColumn({
        type:'uuid'
    })
    id!:string      


    @ManyToOne(()=> Meeting,(meeting_id)=>meeting_id.actionables,
        {
            nullable:false,
            onDelete:'CASCADE',
            onUpdate:'CASCADE'
        }
    )
    meeting_id!:Meeting


    @Column({
        type:'varchar',
        length:255
    })
    task!:string

    @ManyToOne(()=>User,(owner)=>owner.actionables,
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
    due_date?:Date

    @Column({
        type:'timestamp',
        nullable:true
    })
    completed_date?:Date    
}