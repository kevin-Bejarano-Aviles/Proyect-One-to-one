import { mySqlUserRepository } from "infrastructure/repositories";
import { FindUserUseCase } from "./FindUserUseCase";

export const findUserUseCase = new FindUserUseCase(mySqlUserRepository)