import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Actionables } from './Actionables';


@Entity()
export class User {

    @PrimaryColumn({
        type:'uuid'
    })
    id!:string


    @Column({
        type:'varchar',
        length:255,
        nullable:true
    })
    name!:string

    @Column({
        type:'varchar',
        length:255,
        nullable:true
    })
    last_name!:string;

    @OneToMany(()=> Actionables,(actionable)=>actionable.owner)
    actionable?:Actionables[]
}