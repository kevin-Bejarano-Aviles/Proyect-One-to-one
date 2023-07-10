import { User } from "domain/entities/User";
import { MeetingRepository } from "domain/repositories/MeetingRepository";
import { UserRepository } from "domain/repositories/UserRepository"
import { Meeting } from "domain/entities/Meeting";
import { Either, Result, left, right } from "shared/domain/Result";
import { MeetingNotCreatedError } from "domain/errors/MeetingNotCreatedError";
import { UseCase } from "shared/domain/UseCase";
import { UserNotFoundError } from "domain/errors/UserNotFoundError";

type Response = Either<Result<MeetingNotCreatedError | UserNotFoundError>, Result<Meeting>>;
export class CreateMeetingUseCase implements UseCase<CreateMeetingDTO, Response> {
    constructor(private meetingRepository: MeetingRepository<Meeting>, private userRepository: UserRepository<User>) {}
    public async execute({ title, ownerID, attendeeID }: CreateMeetingDTO): Promise<Response> {
        
        const owner = await this.userRepository.findOne(ownerID);
        if (!owner) return left(Result.fail(UserNotFoundError.create('Owner could not be found.')));
        
        const attendee = await this.userRepository.findOne(attendeeID);
        if (!attendee) return left(Result.fail(UserNotFoundError.create('Attendee could be found.')))
        
        const newMeeting: Meeting = {
            date: new Date(Date.now()),
            title,
            owner,
            attendee,
        }
        
        const meetingCreated = await this.meetingRepository.create(newMeeting);
        return meetingCreated
            ? right(Result.ok(newMeeting))
            : left(Result.fail(MeetingNotCreatedError.create('Meeting could not be created.')))
    }
}

export interface CreateMeetingDTO {
    title: string,
    ownerID: string,
    attendeeID: string,
}