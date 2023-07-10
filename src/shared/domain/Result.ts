export class Result<T> {
    private isFailure: boolean
    private _value?: T

    constructor(public readonly isSuccess: boolean, value?: T, public readonly error?: T | string) {
        if (isSuccess && error) {
          throw new Error('InvalidOperation: A result cannot be successful and contain an error')
        }
        if (!isSuccess && !error) {
          throw new Error('InvalidOperation: A failing result needs to contain an error message')
        }
    
        this.isFailure = !this.isSuccess
        this._value = value
    
        Object.freeze(this)
      }

    public static ok<U>(value?: U): Result<U> {
        return new Result<U>(true, value)
    }
    
    public static fail<U>(error: U): Result<U> {
        return new Result<U>(false, undefined, error)
    }

    public getValue(): T {
      if (!this.isSuccess) {
        throw new Error("Can't get the value of an error result. Use 'errorValue' instead.")
      }
      return this._value as T
    }
  
    public getError(): T {
      return this.error as T
    }
}

export type Either<L, R> = Left<L, R> | Right<L, R>

export class Left<L, R> {
  constructor(public readonly value: L) {}

  isLeft(): this is Left<L, R> {
    return true
  }

  isRight(): this is Right<L, R> {
    return false
  }
}

export class Right<L, R> {
    constructor(public readonly value: R) {}
  
    isLeft(): this is Left<L, R> {
      return false
    }
  
    isRight(): this is Right<L, R> {
      return true
    }
}

export const left = <L, R>(l: L): Either<L, R> => new Left<L, R>(l)

export const right = <L, R>(r: R): Either<L, R> => new Right<L, R>(r)