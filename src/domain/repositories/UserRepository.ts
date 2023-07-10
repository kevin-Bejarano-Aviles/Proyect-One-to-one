import { User } from "domain/entities/User"

export interface UserRepository<T> {
    create(user: User): Promise<User>
    delete(id: string): Promise<T>
    update(id: string, user: User): Promise<T>
    findOne(id: string): Promise<T | undefined >
    findAll(take: number, skip: number): Promise<Array<T> | undefined>
}