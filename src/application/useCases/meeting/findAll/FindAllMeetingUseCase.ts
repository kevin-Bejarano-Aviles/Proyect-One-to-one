import { Meeting } from 'domain/entities/Meeting';
import { MeetingNotFoundError } from 'domain/errors/MeetingNotFoundError';
import { MeetingRepository } from 'domain/repositories/MeetingRepository';
import { Either, Result, left, right } from 'shared/domain/Result';
import { UseCase } from 'shared/domain/UseCase';

type Response = Either<MeetingNotFoundError, Result<Meeting[]>>
export class FindAllMeetingUseCase implements UseCase<FindAllMeetingDTO, Response> {
    constructor(private meetingRepository: MeetingRepository<Meeting>) {}
    public async execute({take, skip}: FindAllMeetingDTO): Promise<Response> {
        try {
            const meetingsFound = await this.meetingRepository.findAll(take, skip)
            return meetingsFound
                ? right(Result.ok(meetingsFound))
                : left(MeetingNotFoundError.create('Meetings not found.'))

        }
        catch(e) {
            return left(MeetingNotFoundError.create(e as Error))
        }
    }
}

export interface FindAllMeetingDTO {
    take: number,
    skip: number
}