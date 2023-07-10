import { Result } from "shared/domain/Result";
import { ErrorCode, UseCaseError } from "shared/domain/UseCaseError";

export class UserNotCreatedError extends Result<UseCaseError> {
    private constructor(error?: Error | string) {
        super(false, undefined, {
          code: ErrorCode.CANT_CREATE,
          message: (error as Error).message ?? 'User could not be created',
          error,
        })
    }
    public static create(error?: Error | string): UserNotCreatedError {
        return new UserNotCreatedError(error)
    }
}