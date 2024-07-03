'use client'

import { useState } from "react";
import Header from "./pageComponents/header";
import NewTask from "./pageComponents/newTask";
import Quadrant from "./pageComponents/quadrant";
import plusImage from "@/../public/icons/plus.png";
import Image from 'next/image'

export default function MainPage() {
    const [createNewTask, setCreateNewTask] = useState(false);

    return (
        <>
            <Header />
            <div className="quadrantSheet flex h-screen relative">
                <Quadrant/>
                <div className="w-[3] absolute right-2 top-2">
                    <Image src={plusImage} alt="Add a task"
                        className="w-[100%] cursor-pointer" 
                        onClick={() => setCreateNewTask(true)} />
                </div>

                {
                    createNewTask 
                        ? <NewTask onClose={() => setCreateNewTask(false)}/>
                        : null
                }
                
            </div>
        </>
    )
}