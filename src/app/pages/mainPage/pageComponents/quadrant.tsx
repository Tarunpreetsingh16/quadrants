import { Task } from "@/app/data/task";
import Chip from "@/app/ui/chip"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useMemo } from "react";

interface QuadrantProps {
    xAxisLabel: string,
    yAxisLabel: string,
    quad1Tasks: Array<Task>,
    quad2Tasks: Array<Task>,
    quad3Tasks: Array<Task>,
    quad4Tasks: Array<Task>
}

export default function(
    props: QuadrantProps
) {
    const {quad1Tasks, quad2Tasks, quad3Tasks, quad4Tasks} = props

    const colorShade = useMemo(() => Math.floor(Math.random() * (9 - 6) + 6), [])

    return (
        <div className="flex flex-col">
            <div className="topQuadrants">
                
                <div className="quadrant relative" id="quadrant1">
                    <Labels xAxisLabel={props.xAxisLabel} yAxisLabel={props.yAxisLabel} />
                    <div className="h-[100%]  overflow-scroll ">
                        <div className="p-5 flex flex-row flex-wrap">
                            {
                                quad1Tasks.map((task: Task, index: number) =>
                                    <Chip title={task.title} 
                                        bgColor={`rgba(127,29,29, 0.${colorShade})`} 
                                        id={task.id} key={index}
                                        textColor="text-white"/>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="quadrant" id="quadrant2">
                    <div className=" h-[100%]  overflow-scroll">
                        <div className="p-5 flex flex-row flex-wrap">
                            {
                                quad2Tasks.map((task: Task, index: number) =>
                                    <Chip title={task.title}
                                        bgColor={`rgba(239,68,68, 0.${colorShade})`} 
                                        id={task.id} key={index}
                                        textColor="text-white"/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottomQuadrants">
                <div className="quadrant" id="quadrant3">
                    <div className=" h-[100%]  overflow-scroll">
                        <div className="p-5 flex flex-row flex-wrap">
                            {
                                quad3Tasks.map((task: Task, index: number) =>
                                    <Chip title={task.title}
                                        bgColor={`rgba(245,158,11, 0.${colorShade})`} 
                                        id={task.id} key={index}
                                        textColor="text-white"/>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="quadrant" id="quadrant4">
                    <div className=" h-[100%]  overflow-scroll">
                        <div className="p-5 flex flex-row flex-wrap">
                            {
                                quad4Tasks.map((task: Task, index: number) =>
                                    <Chip title={task.title}
                                        bgColor={`rgba(101,163,13, 0.${colorShade})`} 
                                        id={task.id} key={index}
                                        textColor="text-white"/>
                                )
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
            <label className="absolute font-extrabold right-2">
                {props.yAxisLabel}
                {
                    props.yAxisLabel.length != 0 ? <ArrowBackIcon className='w-[15px] rotate-90'/> : null
                }
            </label>
            <label className="absolute bottom-0 p-1 font-extrabold">
                {
                    props.xAxisLabel.length != 0 ? <ArrowBackIcon className='w-[15px]'/> : null
                }
                {props.xAxisLabel}
            </label>
        </>
    )
}