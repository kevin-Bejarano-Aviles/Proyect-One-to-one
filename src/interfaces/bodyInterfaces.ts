export interface NewFollowUpApiBody {
    owner: string;
    atendee: string;
    topics:string;
    followUp:FollowUpFieldsApi
    actionables:ActionableFieldsApi[]
}


export interface ActionableFieldsApi {
    task:string;
    owner: string;
    due_date: Date;
    completed_date:Date;
}

export interface FollowUpFieldsApi{
    temperature:number;
    fu_date:Date
}