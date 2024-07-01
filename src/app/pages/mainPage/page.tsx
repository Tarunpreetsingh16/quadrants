'use client'

import Header from "./pageComponents/header";
// import { useCustomContextMenu } from "./hooks/customHooks/useCustomContextMenu";
// import CustomContextMenu from "./pageComponents/customContextMenu";
import Quadrant from "./pageComponents/quadrant";

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
            </div>
        </>
    )
}