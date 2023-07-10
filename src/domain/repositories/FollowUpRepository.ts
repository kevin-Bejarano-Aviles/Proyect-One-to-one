import { FollowUp } from "domain/entities/FollowUp"

export interface FollowUpRepository {
    create(user: FollowUp): Promise<FollowUp>
    delete(user: FollowUp): Promise<boolean>
    update(id: string, user: FollowUp): Promise<FollowUp>
    findOne(id: string): Promise<FollowUp>
    findAll(): Promise<Array<FollowUp>>
    findByMeeting(meetingId: string): Promise<Array<FollowUp>>
}