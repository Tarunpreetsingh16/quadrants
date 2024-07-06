import { Task } from "./task"

export class TaskToBeEdited {
    index: number
    task: Task
    quad: number

    constructor(task: Task, index: number, quad: number) {
        this.index = index;
        this.task = task;
        this.quad = quad
    }
}