import { Meeting } from "domain/entities/Meeting"

export interface MeetingRepository<T> {
    create(meeting: Meeting): Promise<T>
    delete(id: string): Promise<T>
    update(id: string, meeting: Meeting): Promise<T>
    findOne(id: string): Promise<T | undefined>
    findAll(take: number, skip: number): Promise<Array<T> | undefined>
}