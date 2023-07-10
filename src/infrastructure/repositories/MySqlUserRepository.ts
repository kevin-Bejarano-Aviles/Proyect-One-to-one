import { User } from "domain/entities/User";
import { UserRepository } from "domain/repositories/UserRepository";
import { UserSchema } from "infrastructure/schemas/user.schema";
import { DeleteResult, Repository, UpdateResult } from "typeorm";

type MySqlUserResultType = User | UpdateResult | DeleteResult
export class MySqlUserRepository implements UserRepository<MySqlUserResultType> {
    constructor (private userRepository: Repository<UserSchema>) {}

    async create(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }
    async delete(id: string): Promise<DeleteResult> {
        return await this.userRepository.delete(id);
    }
    async update(id: string, user: User): Promise<UpdateResult> {
        return await this.userRepository.update(id, user);
    }
    async findOne(id: string): Promise<User | undefined> {
        return await this.userRepository.findOne({
            relations: {
                ownerMetting: true,
                attendeeMetting: true,
                actionables: true,
            },
            where: { id: id },
        }) ?? undefined;
    }
    async findAll(take: number, skip: number): Promise<(User | UpdateResult | DeleteResult)[] | undefined> {
        return await this.userRepository.find({
            relations: {
                ownerMetting: true,
                attendeeMetting: true,
                actionables: true,
            },
            take: take,
            skip: skip
        }) ?? undefined;
    }

}