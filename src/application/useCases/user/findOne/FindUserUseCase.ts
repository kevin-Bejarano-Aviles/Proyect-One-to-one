import { User } from "domain/entities/User";
import { UserNotCreatedError } from "domain/errors/UserNotCreatedError";
import { UserNotFoundError } from "domain/errors/UserNotFoundError";
import { UserRepository } from "domain/repositories/UserRepository";
import { Either, Result, right, left } from "shared/domain/Result";
import { UseCase } from "shared/domain/UseCase";

type Response = Either<UserNotFoundError, Result<User>>;
export class FindUserUseCase implements UseCase<FindUserDTO, Response> {
    constructor(private UserRepository: UserRepository<User>) {}
    public async execute({ id }: FindUserDTO): Promise<Response> {
        try {
            const userFound = await this.UserRepository.findOne(id)
            return userFound
                ? right(Result.ok(userFound))
                : left(UserNotCreatedError.create('User not found.'))
        }
        catch(e) {
            return left(UserNotCreatedError.create(e as Error))
        }
    }
}

export interface FindUserDTO {
    id: string,
}