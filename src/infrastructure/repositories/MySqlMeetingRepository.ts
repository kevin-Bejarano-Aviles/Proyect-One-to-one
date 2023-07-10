import { Meeting } from "domain/entities/Meeting";
import { MeetingRepository } from "domain/repositories/MeetingRepository";
import { MeetingSchema } from "infrastructure/schemas/meeting.schema";
import { DeleteResult, Repository, UpdateResult } from "typeorm";

type MySqlMeetingResultType = Meeting | DeleteResult | UpdateResult
export default class MySqlMeetingRepository implements MeetingRepository<MySqlMeetingResultType> {
    constructor (private meetingRepository: Repository<MeetingSchema>) {}
    async create(meeting: Meeting): Promise<Meeting> {
        return await this.meetingRepository.save(meeting)
    }
    async delete(id: string): Promise<DeleteResult> {
        return await this.meetingRepository.delete(id)
    }
    async update(id: string, meeting: Meeting): Promise<UpdateResult> {
        return await this.meetingRepository.update(id, meeting)
    }
    async findOne(id: string): Promise<Meeting | undefined> {
        return await this.meetingRepository.findOne({
            where: {
                id
            },
            relations: {
                owner:true,
                attendee:true,
                actionables: {
                    owner: true,
                }
            }
        }) ?? undefined
    }
    findAll(take: number, skip: number): Promise<Meeting[] | undefined> {
        return this.meetingRepository.find({
            relations: {
                owner:true,
                attendee:true,
            },
            skip: skip,
            take: take,
            cache: true
        }) ?? undefined
    }

}