import { User } from "domain/entities/User";
import { UserNotCreatedError } from "domain/errors/UserNotCreatedError";
import { UserRepository } from "domain/repositories/UserRepository";
import { Either, Result, right, left } from "shared/domain/Result";
import { UseCase } from "shared/domain/UseCase";

type Response = Either<UserNotCreatedError, Result<User>>;
export class CreateUserUseCase implements UseCase<CreateUserDTO, Response> {
    constructor(private UserRepository: UserRepository<User>) {}
    public async execute({ name, lastName }: CreateUserDTO): Promise<Response> {
        try {
            const newUser = await this.UserRepository.create({ name, lastName } as User)
            return newUser
                ? right(Result.ok(newUser))
                : left(UserNotCreatedError.create('User could not be created.'))
        }
        catch(e) {
            return left(UserNotCreatedError.create(e as Error))
        }
    }
}

export interface CreateUserDTO {
    name: string,
    lastName: string
}