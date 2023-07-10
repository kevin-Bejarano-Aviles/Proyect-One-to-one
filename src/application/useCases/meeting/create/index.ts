import { mySqlMeetingRepository, mySqlUserRepository } from "infrastructure/repositories";
import { CreateMeetingUseCase } from "./CreateMeetingUseCase";

export const createMeetingUseCase = new CreateMeetingUseCase(mySqlMeetingRepository, mySqlUserRepository)