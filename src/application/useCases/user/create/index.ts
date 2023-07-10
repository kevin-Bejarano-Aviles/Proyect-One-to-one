import { MySqlUserRepository } from "infrastructure/repositories/MySqlUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

export const createUserUseCase = new CreateUserUseCase(MySqlUserRepository)