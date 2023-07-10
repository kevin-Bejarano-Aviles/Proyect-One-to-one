import { Result } from 'shared/domain/Result';
import { ErrorCode, UseCaseError } from 'shared/domain/UseCaseError';

export class MeetingNotFoundError extends Result<UseCaseError> {
   private constructor(error?: Error | string) {
       super(false, undefined, {
           code: ErrorCode.NOT_FOUND,
           message: (error as Error).message ?? 'Meeting not found',
           error,
       })
   }

   public static create(error?: Error | string): MeetingNotFoundError {
       return new MeetingNotFoundError(error)
   }
}