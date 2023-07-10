import { Actionable } from "domain/entities/Actionable"

export interface ActionableRepository {
    create(user: Actionable): Promise<Actionable>
    delete(user: Actionable): Promise<boolean>
    update(id: string, user: Actionable): Promise<Actionable>
    findOne(id: string): Promise<Actionable>
    findAll(): Promise<Array<Actionable>>
    findByUser(userId: string): Promise<Array<Actionable>>
    findByMeeting(meetingId: string): Promise<Array<Actionable>>
}