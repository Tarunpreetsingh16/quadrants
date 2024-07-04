'use client'

import { useState } from "react";
import Header from "./pageComponents/header";
import NewTask from "./pageComponents/newTask";
import Quadrant from "./pageComponents/quadrant";
import AxisNaming from "./pageComponents/axisNaming";
import FeatureList from "./pageComponents/featureList";

export default function MainPage() {
    const [createNewTask, setCreateNewTask] = useState(false);

    return (
        <>
            <Header>
                <FeatureList onCreateNewTask={() => setCreateNewTask(true)} 
                    containerCss="flex-row justify-end buttonSpacingHorizontal" />
            </Header>
            <div className="quadrantSheet flex h-screen relative">
                <AxisNaming />
                <Quadrant />
                {
                    createNewTask 
                        ? <NewTask onClose={() => setCreateNewTask(false)}/>
                        : null
                }
                
            </div>
        </>
    )
}