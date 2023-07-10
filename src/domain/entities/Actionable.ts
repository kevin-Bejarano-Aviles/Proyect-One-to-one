import { User } from "./User"

export interface Actionable {
    id: string,
    task: string,
    dueDate?: Date,
    completedDate?: Date
    owner: User
}