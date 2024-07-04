export class Err {
    hasError: boolean;
    msg : string

    constructor(hasError: boolean, msg: string) {
        this.hasError = hasError
        this.msg = msg
    }
}