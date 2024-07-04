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

export default function MainPage() {
    
    const [quad1Tasks, pushToQuad1Tasks] = useState(Array<Task>);
    const [quad2Tasks, pushToQuad2Tasks] = useState(Array<Task>);
    const [quad3Tasks, pushToQuad3Tasks] = useState(Array<Task>);
    const [quad4Tasks, pushToQuad4Tasks] = useState(Array<Task>);
    const [createNewTask, setCreateNewTask] = useState(false);
    const [editAxes, setEditAxes] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [xAxisLabel, setXAxisLabel] = useState("");
    const [yAxisLabel, setYAxisLabel] = useState("");

    const onCreateNewTask = (task : Task) => {
        if (task.xAxisPriority === "high" && task.yAxisPriority === "high") {
            pushToQuad1Tasks([...quad1Tasks, task])
        }
        else if (task.xAxisPriority === "low" && task.yAxisPriority === "low") {
            pushToQuad4Tasks([...quad4Tasks, task])
        }
        else if (task.xAxisPriority === "low") {
            pushToQuad2Tasks([...quad2Tasks, task])
        }
        else {
            pushToQuad3Tasks([...quad3Tasks, task])
        }
        setCreateNewTask(false)
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
                <FeatureList onCreateNewTask={() => {
                        setCreateNewTask(true)
                        setEditAxes(false)
                        setShowAlert(false)
                    }} 
                    onEditAxes={() => {
                        setEditAxes(true)
                        setCreateNewTask(false)
                        setShowAlert(false)
                    }}
                    containerCss="flex-row justify-end buttonSpacingHorizontal" />
            </Header>
            <div className="quadrantSheet flex h-screen">
                <Quadrant xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} 
                    quad1Tasks={quad1Tasks} 
                    quad2Tasks={quad2Tasks} 
                    quad3Tasks={quad3Tasks} 
                    quad4Tasks={quad4Tasks} />
                {
                    editAxes 
                        ? <AxisNaming onClose={() => setEditAxes(false)}
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
                        ? <NewTask onClose={() => setCreateNewTask(false)}
                            xAxisLabel={xAxisLabel}
                            yAxisLabel={yAxisLabel} 
                            onCreateNewTask={onCreateNewTask}/>
                        : null
                }
                {
                    showAlert
                        ? <Alert onClose={() => setShowAlert(false)}
                            title="Missing axes labels" >
                                <div>
                                    <label>Please label the axes first.</label>
                                    <div className="my-3">
                                        <button className="ml-1 success"
                                            onClick={() => {
                                                setEditAxes(true)
                                                setShowAlert(false)
                                            }}>Label Axes</button>
                                    </div>
                                </div>
                            </Alert>
                        : null
                }
            </div>
        </>
    )
}