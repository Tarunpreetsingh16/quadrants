'use client'

import { useEffect, useState } from "react";
import Header from "./pageComponents/header";
import NewTask from "./pageComponents/newTask";
import Quadrant from "./pageComponents/quadrant";
import AxisNaming from "./pageComponents/axisNaming";
import FeatureList from "./pageComponents/featureList";
import Alert from "@/app/ui/alert";

export default function MainPage() {
    const [createNewTask, setCreateNewTask] = useState(false);
    const [editAxes, setEditAxes] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [xAxisLabel, setXAxisLabel] = useState("");
    const [yAxisLabel, setYAxisLabel] = useState("");

    useEffect(() => {
        if (createNewTask && (xAxisLabel === '' || yAxisLabel === '')) {
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
            <div className="quadrantSheet flex h-screen relative">
                <Quadrant xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} />
                {
                    editAxes 
                        ? <AxisNaming onClose={() => setEditAxes(false)}
                            xAxisLabel={xAxisLabel}
                            yAxisLabel={yAxisLabel}
                            onXAxisNameChange={setXAxisLabel}
                            onYAxisNameChange={setYAxisLabel}/>
                        : null
                }
                {
                    createNewTask 
                        ? <NewTask onClose={() => setCreateNewTask(false)}
                            xAxisLabel={xAxisLabel}
                            yAxisLabel={yAxisLabel} />
                        : null
                }
                {
                    showAlert
                        ? <Alert onClose={() => setShowAlert(false)}
                            title="Missing axes labels"
                            description='Please enter the axes names using "Edit axes" button' />
                        : null
                }
                
            </div>
        </>
    )
}