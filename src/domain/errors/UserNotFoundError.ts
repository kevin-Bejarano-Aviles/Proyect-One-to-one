import { Result } from "shared/domain/Result";
import { ErrorCode, UseCaseError } from "shared/domain/UseCaseError";

export class UserNotFoundError extends Result<UseCaseError> {
    private constructor(error?: Error | string) {
        super(false, undefined, {
          code: ErrorCode.NOT_FOUND,
          message: (error as Error).message ?? 'User could not be founds',
          error,
        })
    }
    public static create(error?: Error | string): UserNotFoundError {
        return new UserNotFoundError(error)
    }
}