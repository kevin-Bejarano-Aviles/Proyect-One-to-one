import { Result } from 'shared/domain/Result';
import { ErrorCode, UseCaseError } from 'shared/domain/UseCaseError';
export class MeetingNotCreatedError extends Result<UseCaseError> {
   private constructor(error?: Error | string) {
       super(false, undefined, {
           code: ErrorCode.CANT_CREATE,
           message: (error as Error).message ?? 'Meeting could not be created.',
           error,
       })
   }

   public static create(error?: Error | string): MeetingNotCreatedError {
       return new MeetingNotCreatedError(error)
   }
}