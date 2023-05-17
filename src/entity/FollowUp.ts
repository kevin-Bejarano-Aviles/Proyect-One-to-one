import { Entity, PrimaryColumn, Column, OneToOne,JoinColumn, OneToMany} from 'typeorm';
import { User } from './User';
import { Actionables } from './Actionables';

@Entity()
export class FollowUp {

    @PrimaryColumn({
        type:'uuid'
    })
    id!:string

    @OneToOne( ()=> User ,{
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
        nullable:true
    })
    @JoinColumn()
    owner!:User


    @OneToOne( ()=>User,{nullable:true,onDelete:'CASCADE',onUpdate:'CASCADE'})
    @JoinColumn()
    attendee!:User

    @Column({
        type:'timestamp',
        nullable:true,
    })
    date!:Date

    @Column({
        type:'longtext'
    })
    topics?:string

    @Column({
        type:'int'
    })
    temperature?:number

    @OneToMany(()=> Actionables,(actionable)=>actionable.followup_id)
    actionable?:Actionables[]
}