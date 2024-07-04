'use client'

import { useEffect, useState } from "react";
import Header from "./pageComponents/header";
import NewTask from "./pageComponents/newTask";
import Quadrant from "./pageComponents/quadrant";
import AxisNaming from "./pageComponents/axisNaming";
import FeatureList from "./pageComponents/featureList";

export default function MainPage() {
    const [createNewTask, setCreateNewTask] = useState(false);
    const [editAxes, setEditAxes] = useState(false);
    const [xAxisLabel, setXAxisLabel] = useState("");
    const [yAxisLabel, setYAxisLabel] = useState("");

    useEffect(() => {
        if (createNewTask && (xAxisLabel === '' || yAxisLabel === '')) {
            alert("Please name the axes first.")
            setCreateNewTask(false);
        }
    }, [createNewTask])

    return (
        <>
            <Header>
                <FeatureList onCreateNewTask={() => {
                        setCreateNewTask(true)
                        setEditAxes(false)
                    }} 
                    onEditAxes={() => {
                        setEditAxes(true)
                        setCreateNewTask(false)
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
                
            </div>
        </>
    )
}