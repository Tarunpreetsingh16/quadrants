export class Task {
    id: number;
    title: string;
    description: string;
    date: Date;
    xAxisPriority: string;
    yAxisPriority: string

    constructor(id: number, title: string, description: string, date: Date, xAxisPriority: string, yAxisPriority: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.xAxisPriority = xAxisPriority;
        this.yAxisPriority = yAxisPriority;
    }
}