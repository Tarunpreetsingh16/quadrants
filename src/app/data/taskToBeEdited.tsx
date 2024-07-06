import { Task } from "./task"

export class TaskToBeEdited {
    index: number
    task: Task

    constructor(task: Task, index: number) {
        this.index = index;
        this.task = task
    }
}