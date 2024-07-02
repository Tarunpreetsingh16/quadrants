'use client'

import Header from "./pageComponents/header";
import NewTask from "./pageComponents/newTask";
// import { useCustomContextMenu } from "./hooks/customHooks/useCustomContextMenu";
// import CustomContextMenu from "./pageComponents/customContextMenu";
import Quadrant from "./pageComponents/quadrant";
import plusImage from "@/../public/icons/plus.png";
import Image from 'next/image'

export default function MainPage() {
    // const { xPos, yPos, showContextMenu } = useCustomContextMenu();
    return (
        <>
            <Header />
            <div className="quadrantSheet flex h-screen relative">
                <Quadrant/>
                {/* {
                    showContextMenu
                        ? <CustomContextMenu xPos={xPos} yPos={yPos} 
                            animationClass={showContextMenu ? "animate__zoomIn" : "animate__zoomOut"}/>
                        : null
                } */}
                <div className="w-[3] absolute right-2 top-2">
                    <Image src={plusImage} className="w-[100%] cursor-pointer" alt="Add a task" />
                </div>
                <NewTask />
            </div>
        </>
    )
}