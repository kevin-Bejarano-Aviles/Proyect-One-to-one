export interface MeetingDTO {
    owner: string;
    attendee: string;
    title: string;
    
}
export interface FollowUpDTO {
    temperature:number;
    meeting_id:string;
    topic:string;
}

export interface ActionableDTO {
    meeting_id: string;
    task: string;
    owner: string;
    due_date: Date;
}

export interface UserDTO {
    name:string;
    last_name:string;
}
