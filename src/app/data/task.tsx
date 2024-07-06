export class Task {
    title: string;
    description: string;
    date: Date;
    xAxisPriority: string;
    yAxisPriority: string

    constructor(title: string, description: string, date: Date, xAxisPriority: string, yAxisPriority: string) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.xAxisPriority = xAxisPriority;
        this.yAxisPriority = yAxisPriority;
    }

    public getCopy(): Task {
        return new Task(this.title, this.description, this.date, this.xAxisPriority, this.yAxisPriority)
    }
}