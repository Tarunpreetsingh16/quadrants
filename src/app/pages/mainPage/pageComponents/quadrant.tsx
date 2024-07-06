import { Task } from "@/app/data/task";
import Chip from "@/app/ui/chip"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface QuadrantProps {
    xAxisLabel: string,
    yAxisLabel: string,
    quad1Tasks: Array<Task>,
    quad2Tasks: Array<Task>,
    quad3Tasks: Array<Task>,
    quad4Tasks: Array<Task>,
    onTaskClick: ([]) => void
}

export default function(
    props: QuadrantProps
) {
    const {quad1Tasks, quad2Tasks, quad3Tasks, quad4Tasks} = props

    const colorShade = 9

    return (
        <div className="flex flex-col">
            <div className="topQuadrants">
                <div className="quadrant relative" id="quadrant1">
                    <Labels xAxisLabel={props.xAxisLabel} yAxisLabel={props.yAxisLabel} />
                    <div className="h-[92%]  overflow-auto">
                        <div className="p-5 flex flex-row flex-wrap">
                            {
                                quad1Tasks.map((task: Task, index: number) =>
                                    <Chip title={task.title} 
                                        bgColor={`rgba(127,29,29, 0.${colorShade})`} 
                                        key={index}
                                        textColor="text-white"
                                        onClick={() => props.onTaskClick([index, 0])}
                                        animation="animate__flipInX"/>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="quadrant" id="quadrant2">
                    <div className=" h-[98%]  overflow-auto">
                        <div className="p-5 flex flex-row flex-wrap">
                            {
                                quad2Tasks.map((task: Task, index: number) =>
                                    <Chip title={task.title}
                                        bgColor={`rgba(239,68,68, 0.${colorShade})`} 
                                        key={index}
                                        textColor="text-white"
                                        onClick={() => props.onTaskClick([index, 1])}
                                        animation="animate__flipInX"/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottomQuadrants">
                <div className="quadrant" id="quadrant3">
                    <div className=" h-[98%]  overflow-auto">
                        <div className="p-5 flex flex-row flex-wrap">
                            {
                                quad3Tasks.map((task: Task, index: number) =>
                                    <Chip title={task.title}
                                        bgColor={`rgba(245,158,11, 0.${colorShade})`} 
                                        key={index}
                                        textColor="text-white"
                                        onClick={() => props.onTaskClick([index, 2])}
                                        animation="animate__flipInX"/>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="quadrant" id="quadrant4">
                    <div className=" h-[98%]  overflow-auto">
                        <div className="p-5 flex flex-row flex-wrap">
                            {
                                quad4Tasks.map((task: Task, index: number) =>
                                    <Chip title={task.title}
                                        bgColor={`rgba(101,163,13, 0.${colorShade})`} 
                                        key={index}
                                        textColor="text-white"
                                        onClick={() => props.onTaskClick([index, 3])}
                                        animation="animate__flipInX"/>
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