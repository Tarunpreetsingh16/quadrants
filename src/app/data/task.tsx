export class Task {
    id: number;
    title: string;
    description: string;
    date: Date;
    xAxisPriority: string;
    yAxisPriority: string;
    deleted?: boolean

    constructor(id: number, title: string, description: string, date: Date, xAxisPriority: string, yAxisPriority: string, deleted?: boolean) {
        this.id = id
        this.title = title;
        this.description = description;
        this.date = date;
        this.xAxisPriority = xAxisPriority;
        this.yAxisPriority = yAxisPriority;
        this.deleted = deleted ?? false 
    }

    public getCopy(): Task {
        return new Task(this.id, this.title, this.description, this.date, this.xAxisPriority, this.yAxisPriority, this.deleted)
    }
}