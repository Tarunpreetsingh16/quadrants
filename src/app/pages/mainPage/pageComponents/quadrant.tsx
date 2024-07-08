import { Task } from "@/app/data/task";
import { TaskToBeEdited } from "@/app/data/taskToBeEdited";
import Chip from "@/app/ui/chip"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DragEvent, DragEventHandler, useState } from "react";

interface QuadrantProps {
    xAxisLabel: string,
    yAxisLabel: string,
    quad1Tasks: Array<Task>,
    quad2Tasks: Array<Task>,
    quad3Tasks: Array<Task>,
    quad4Tasks: Array<Task>,
    onTaskClick: ([]) => void,
    onDragStart: (taskToBeEdited: TaskToBeEdited) => void,
    onDrop: (updatedTask: Task) => void
}

export default function(
    props: QuadrantProps
) {
    const defaultTaskToBeEdited = new TaskToBeEdited(new Task(-1, '', '', new Date(), '', ''), -1 , -1)
    const {quad1Tasks, quad2Tasks, quad3Tasks, quad4Tasks} = props
    const [draggedTask, setDraggedTask] = 
        useState(defaultTaskToBeEdited);

    const colorShade = 9

    const allowDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const dragStart = (e: DragEvent<HTMLDivElement>)=> {
        const target = e.target
        let [index, quad] = e.target.id.split("#");
        index = Number(index)
        quad = Number(quad)
        let taskToBeEdited: TaskToBeEdited = defaultTaskToBeEdited;
        let validQuadrantFound = true
        switch (quad) {
            case 1: 
                taskToBeEdited = new TaskToBeEdited(quad1Tasks[index], index, quad)
                props.onDragStart(taskToBeEdited)
                break;
            case 2: 
                taskToBeEdited = new TaskToBeEdited(quad2Tasks[index], index, quad)
                props.onDragStart(taskToBeEdited)
                break;
            case 3: 
                taskToBeEdited = new TaskToBeEdited(quad3Tasks[index], index, quad)
                props.onDragStart(taskToBeEdited)
                break;
            case 4: 
                taskToBeEdited = new TaskToBeEdited(quad4Tasks[index], index, quad)
                props.onDragStart(taskToBeEdited)
                break;
            default: 
                console.error(`Invalid! quad ${quad}, index ${index}`)
                validQuadrantFound = false
        }
        if (validQuadrantFound) {
            setDraggedTask(taskToBeEdited)
        }
    }

    const drop = (e: DragEvent<HTMLDivElement>) => {
        const classes: Array<string> = e.target.classList
        let droppableZone = '';
        classes.forEach((item) => {
            if (item.includes("droppableZone")) {
                droppableZone = item.split('-')[0]
            }
        })

        switch(droppableZone) {
            case "quadrant1":
                draggedTask.task.xAxisPriority = "high"
                draggedTask.task.yAxisPriority = "high"
                props.onDrop(draggedTask.task)
                break;
            case "quadrant2":
                draggedTask.task.xAxisPriority = "low"
                draggedTask.task.yAxisPriority = "high"
                props.onDrop(draggedTask.task)
                break;
            case "quadrant3":
                draggedTask.task.xAxisPriority = "high"
                draggedTask.task.yAxisPriority = "low"
                props.onDrop(draggedTask.task)
                break;
            case "quadrant4":
                draggedTask.task.xAxisPriority = "low"
                draggedTask.task.yAxisPriority = "low"
                props.onDrop(draggedTask.task)
                break;
            default:
                console.error("Invalid quadrant droppable zone!")
        }
    }

    return (
        <div className="flex flex-col">
            <div className="topQuadrants">
                <div className="quadrant relative" id="quadrant1">
                    <Labels xAxisLabel={props.xAxisLabel} yAxisLabel={props.yAxisLabel} />
                    <div className="h-[92%]  overflow-auto quadrant1-droppableZone" 
                            onDrop={(event) => drop(event)} 
                            onDragOver={(event) => 
                                draggedTask.quad === 1 
                                    ? () => {} 
                                    : allowDrop(event)}>
                        <div className="p-5 flex flex-row flex-wrap quadrant1-droppableZone">
                            {
                                quad1Tasks
                                    .map((task: Task, index: number) => {
                                        if (!task.deleted) {
                                            return <Chip title={task.title} 
                                                bgColor={`rgba(127,29,29, 0.${colorShade})`} 
                                                key={index}
                                                textColor="text-white"
                                                onClick={() => props.onTaskClick([index, 1])}
                                                animation="animate__flipInX"
                                                id={`${index}#1`}
                                                onDragStart={(event) => dragStart(event)}/>
                                        }
                                    })
                            }
                        </div>
                    </div>
                </div>
                <div className="quadrant" id="quadrant2">
                    <div className=" h-[98%]  overflow-auto quadrant2-droppableZone"
                            onDrop={drop} 
                            onDragOver={draggedTask.quad === 2 ? () => {} : allowDrop}>
                        <div className="p-5 flex flex-row flex-wrap quadrant2-droppableZone">
                            {
                                quad2Tasks
                                    .map((task: Task, index: number) => {
                                        if (!task.deleted) {
                                            return <Chip title={task.title} 
                                                bgColor={`rgba(239,68,68, 0.${colorShade})`} 
                                                key={index}
                                                textColor="text-white"
                                                onClick={() => props.onTaskClick([index, 2])}
                                                animation="animate__flipInX"
                                                id={`${index}#2`}
                                                onDragStart={(event) => dragStart(event)}/>
                                        }
                                    })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottomQuadrants">
                <div className="quadrant" id="quadrant3">
                    <div className=" h-[98%]  overflow-auto quadrant3-droppableZone"
                            onDrop={drop} 
                            onDragOver={draggedTask.quad === 3 ? () => {} : allowDrop}>
                        <div className="p-5 flex flex-row flex-wrap quadrant3-droppableZone">
                            {
                                quad3Tasks
                                    .map((task: Task, index: number) => {
                                        if (!task.deleted) {
                                            return <Chip title={task.title} 
                                                bgColor={`rgba(245,158,11, 0.${colorShade})`} 
                                                key={index}
                                                textColor="text-white"
                                                onClick={() => props.onTaskClick([index, 3])}
                                                animation="animate__flipInX"
                                                id={`${index}#3`}
                                                onDragStart={(event) => dragStart(event)}/>
                                        }
                                    })
                            }
                        </div>
                    </div>
                </div>
                <div className="quadrant" id="quadrant4">
                    <div className=" h-[98%]  overflow-auto quadrant4-droppableZone"
                            onDrop={drop} 
                            onDragOver={draggedTask.quad === 4 ? () => {} : allowDrop}>
                        <div className="p-5 flex flex-row flex-wrap quadrant4-droppableZone">
                            {
                                quad4Tasks
                                    .map((task: Task, index: number) => {
                                        if (!task.deleted) {
                                            return <Chip title={task.title} 
                                                bgColor={`rgba(101,163,13, 0.${colorShade})`} 
                                                key={index}
                                                textColor="text-white"
                                                onClick={() => props.onTaskClick([index, 4])}
                                                animation="animate__flipInX"
                                                id={`${index}#4`}
                                                onDragStart={(event) => dragStart(event)}/>
                                        }
                                    })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface LabelsProps {
    xAxisLabel: string,
    yAxisLabel: string
}

const Labels = (
    props: LabelsProps
) => {
    return (
    <>
            {
                props.yAxisLabel.length != 0 ?  (
                    <>
                        <label className="absolute font-extrabold right-2">
                            {props.yAxisLabel}
                            <ArrowBackIcon className='w-[15px] rotate-90'/>
                        </label>
                    </>
                ) : null
            }
            {
                props.xAxisLabel.length != 0 ?  (
                    <>
                        <label className="absolute font-extrabold bottom-0 left-2">
                            <ArrowBackIcon className='w-[15px]'/>
                            {props.xAxisLabel}
                        </label>
                    </>
                ) : null
            }
        </>
    )
}