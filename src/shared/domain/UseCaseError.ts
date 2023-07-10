
export interface UseCaseError {
    readonly code: ErrorCode
    readonly message: string
    readonly error?: Error | string
}

export enum ErrorCode {
    UNEXPECTED = 'UNEXPECTED',
    NOT_FOUND = 'NOT_FOUND',
    NOT_VALID = 'NOT_VALID',
    CANT_CREATE = 'CANT_CREATE',
    CANT_UPDATE = 'CANT_UPDATE',
    CANT_ADD = 'CANT_ADD',
    CANT_CONFIRM = 'CANT_CONFIRM',
    CANT_DELETE = 'CANT_DELETE',
    CANT_ASSIGN = 'CANT_ASSIGN',
    CANT_UNASSIGN = 'CANT_UNASSIGN',
    CANT_GRANT = 'CANT_GRANT',
}