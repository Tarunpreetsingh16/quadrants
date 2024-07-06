'use client'

import { useEffect, useState } from "react";
import Header from "./pageComponents/header";
import NewTask from "./pageComponents/newTask";
import Quadrant from "./pageComponents/quadrant";
import AxisNaming from "./pageComponents/axisNaming";
import FeatureList from "./pageComponents/featureList";
import Alert from "@/app/ui/alert";
import { Task } from "@/app/data/task";
import { Axes } from "@/app/data/axes";
import EditTask from "./pageComponents/editTask";
import { TaskToBeEdited } from "@/app/data/taskToBeEdited";

export default function MainPage() {
    
    const [quad1Tasks, updateQuad1Tasks] = useState(Array<Task>(
        // (new Task("Task1", "Description", new Date(), "high", "high")),
    ));
    const [quad2Tasks, updateQuad2Tasks] = useState(Array<Task>(
    ));
    const [quad3Tasks, updateQuad3Tasks] = useState(Array<Task>);
    const [quad4Tasks, updateQuad4Tasks] = useState(Array<Task>);
    const [createNewTask, setCreateNewTask] = useState(false);
    const [editAxes, setEditAxes] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [xAxisLabel, setXAxisLabel] = useState("X-Axis");
    const [yAxisLabel, setYAxisLabel] = useState("Y-Axis");
    const [taskToBeEdited, setTaskToBeEdited] = useState(new TaskToBeEdited(new Task('', '', new Date(), '', ''), -1, -1))
    const [editTask, setEditTask] = useState(false)

    const editModalStates = (type: string, state: boolean) => {
        setCreateNewTask(false)
        setEditAxes(false)
        setShowAlert(false)
        setEditTask(false)
        
        switch (type) {
            case 'createNewTask':
                setCreateNewTask(state)
                break
            case 'editAxes':
                setEditAxes(state)
                break
            case 'showAlert':
                setShowAlert(state)
                break
            case 'editTask':
                setEditTask(state)
                break
            default: 
                console.error("state type not found")
                return
        }

    }

    const onCreateNewTask = (task : Task) => {
        if (task.xAxisPriority === "high" && task.yAxisPriority === "high") {
            updateQuad1Tasks([...quad1Tasks, task])
        }
        else if (task.xAxisPriority === "low" && task.yAxisPriority === "low") {
            updateQuad4Tasks([...quad4Tasks, task])
        }
        else if (task.xAxisPriority === "low") {
            updateQuad2Tasks([...quad2Tasks, task])
        }
        else {
            updateQuad3Tasks([...quad3Tasks, task])
        }
        setCreateNewTask(false)
    }

    const onTaskClick = (arr: Array<number>) => {
        const [index, quad] = arr;
        switch (quad) {
            case 0: 
                setTaskToBeEdited(new TaskToBeEdited(quad1Tasks[index], index, quad))
                break;
            case 1: 
                setTaskToBeEdited(new TaskToBeEdited(quad2Tasks[index], index, quad))
                break;
            case 2: 
                setTaskToBeEdited(new TaskToBeEdited(quad3Tasks[index], index, quad))
                break;
            case 3: 
                setTaskToBeEdited(new TaskToBeEdited(quad4Tasks[index], index, quad))
                break;
            default: 
                setTaskToBeEdited(new TaskToBeEdited(new Task('', '', new Date(), '', ''), -1, -1))
                console.error("Invalid quadrant!")
                return
        }

        editModalStates('editTask', true)
    }

    const deleteTask = () => {
        const quad = taskToBeEdited.quad
        switch(quad) {
            case 0:
                updateQuad1Tasks([
                    ...quad1Tasks.slice(0, taskToBeEdited.index),
                    ...quad1Tasks.slice(taskToBeEdited.index + 1)
                ])
                break
            case 1:
                updateQuad2Tasks([
                    ...quad2Tasks.slice(0, taskToBeEdited.index),
                    ...quad2Tasks.slice(taskToBeEdited.index + 1)
                ])
                break
            case 2:
                updateQuad3Tasks([
                    ...quad3Tasks.slice(0, taskToBeEdited.index),
                    ...quad3Tasks.slice(taskToBeEdited.index + 1)
                ])
                break
            case 3:
                updateQuad4Tasks([
                    ...quad4Tasks.slice(0, taskToBeEdited.index),
                    ...quad4Tasks.slice(taskToBeEdited.index + 1)
                ])
                break
            default:
                console.error("Invalid quad!")            
        }
        editModalStates('editTask', false)
    }

    useEffect(() => {
        if (createNewTask && (xAxisLabel.trim().length === 0 || yAxisLabel.trim().length === 0)) {
            setCreateNewTask(false)
            setShowAlert(true)
        }
    }, [createNewTask])

    return (
        <>
            <Header>
                <FeatureList onCreateNewTask={() => editModalStates('createNewTask', true)} 
                    onEditAxes={() =>  editModalStates('editAxes', true)}
                    containerCss="flex-row justify-end buttonSpacingHorizontal" />
            </Header>
            <div className="quadrantSheet flex h-screen">
                <Quadrant xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} 
                    quad1Tasks={quad1Tasks} 
                    quad2Tasks={quad2Tasks} 
                    quad3Tasks={quad3Tasks} 
                    quad4Tasks={quad4Tasks}
                    onTaskClick={onTaskClick} />
                {
                    editAxes
                        ? <AxisNaming onClose={() => editModalStates('editTask', false)}
                            xAxisLabel={xAxisLabel}
                            yAxisLabel={yAxisLabel}
                            onUpdate={(axes: Axes) => {
                                setXAxisLabel(axes.xAxisLabel)
                                setYAxisLabel(axes.yAxisLabel)
                                setEditAxes(false)
                            }}/>
                        : null
                }
                {
                    createNewTask 
                        ? <NewTask onClose={() => editModalStates('createNewTask', false)}
                            xAxisLabel={xAxisLabel}
                            yAxisLabel={yAxisLabel} 
                            onCreateNewTask={onCreateNewTask}/>
                        : null
                }
                {
                    showAlert
                        ? <Alert onClose={() => editModalStates('showAlert', false)}
                            title="Missing axes labels" >
                                <div>
                                    <label>Please label the axes first.</label>
                                    <div className="my-3">
                                        <button className="ml-1 success"
                                            onClick={() => editModalStates('editAxes', true)}>Label Axes</button>
                                    </div>
                                </div>
                            </Alert>
                        : null
                }
                {
                    editTask
                        ? <EditTask task={taskToBeEdited.task} 
                            xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel}
                            onClose={() => {
                                editModalStates('editTask', false)
                            }} 
                            onUpdateTask={(updatedTask: Task) => {
                                updateQuad1Tasks([
                                    ...quad1Tasks.slice(0, taskToBeEdited.index),
                                    updatedTask,
                                    ...quad1Tasks.slice(taskToBeEdited.index + 1)
                                ])
                                editModalStates('editTask', false)
                            }}
                            onDeleteTask={deleteTask}
                            />
                        : null
                }
            </div>
        </>
    )
}