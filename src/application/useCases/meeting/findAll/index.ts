import { mySqlMeetingRepository } from "infrastructure/repositories";
import { FindAllMeetingUseCase } from "./FindAllMeetingUseCase";

export const findAllMeetingsUseCase = new FindAllMeetingUseCase(mySqlMeetingRepository)