import { Actionable } from "./Actionable"
import { FollowUp } from "./FollowUp"
import { User } from "./User"

export interface Meeting {
    id?: string
    title: string
    topics?: string
    date: Date
    owner: User
    attendee: User
    actionables?: Array<Actionable>
    followUps?: Array<FollowUp>
}