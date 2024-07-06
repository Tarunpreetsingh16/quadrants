import Input from "@/app/ui/input";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from "react";
import dayjs from "dayjs";
import { Task } from "@/app/data/task";
import EditIcon from '@mui/icons-material/Edit';

interface EditTaskProps {
    onClose: () => void,
    xAxisLabel: string,
    yAxisLabel: string,
    task: Task,
    updateTask: (task: Task) => void
}

export default function(
    props: EditTaskProps
) {
    const [readOnly, setReadOnly] = useState(true)
    const [updatedTask, setUpdatedTask] = useState(props.task)

    const updateTask = () => {
        // props.updateTask(task)
    }

    return (
        <div className="modalBg absolute w-screen h-screen">
            <div className="w-screen h-screen flex justify-center">
                <div className="modal bg-black self-center flex flex-col  animate__animated animate__zoomIn">
                    <div className="self-center w-[80%]">
                        <div className="my-3 flex w-[100%] flex-row justify-between" >
                            <label className="text-2xl">Update Task</label>
                            <div className="flex flex-row w-[50%] justify-end">
                                
                                { 
                                    readOnly 
                                        ?   <div className="self-center cursor-pointer mr-5 text-sky-600"
                                                onClick={() => setReadOnly(!readOnly)}>
                                                <EditIcon className="editTask"/>
                                            </div>
                                        : null
                                }
                                <div className="self-center cursor-pointer text-red-600" 
                                    onClick={props.onClose}>
                                    <HighlightOffIcon className="closeTask"/>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="my-3 flex flex-col">
                            <label>Title</label>
                            <Input 
                                placeholder="Need to create tickets..."
                                value={updatedTask.title} 
                                onChange={(val) => {
                                    const task = updatedTask.getCopy();
                                    task.title = val
                                    setUpdatedTask(task)
                                }} 
                                readOnly={readOnly} />
                        </div>
                        
                        <div className="my-3 flex flex-col">
                            <label>Description</label>
                            <textarea className={`rounded-sm font-medium leading-[2] px-1 resize-none 
                                    ${readOnly ? "readOnlyInput" : null}
                                    ${readOnly ? "h-[70px]" : "h-[100px]"}
                                    overflow-scroll
                                `}
                                placeholder="Tickets needs to created by Monday for etransfer initiative..." 
                                value={updatedTask.description}
                                onChange={(e) => {
                                    const task = updatedTask.getCopy();
                                    task.description = e.target.value
                                    setUpdatedTask(task)
                                }} 
                                readOnly={readOnly} />
                        </div>

                        <div className="my-3 flex flex-col">
                            <label>{props.xAxisLabel}</label>
                            
                            { 
                                !readOnly
                                    ?   <ScaleRadioGroup
                                            priority={updatedTask.xAxisPriority}
                                            onChangePriority={(val) => {
                                                const task = updatedTask.getCopy();
                                                task.xAxisPriority = val
                                                setUpdatedTask(task)
                                            }}/>
                                    : <h6 className="capitalize text-xs font-medium inputTextColor">{updatedTask.xAxisPriority}</h6>
                            }
                        </div>

                        <div className="my-3 flex flex-col">
                            <label>{props.yAxisLabel}</label>
                            { 
                                !readOnly
                                    ?   <ScaleRadioGroup
                                            priority={updatedTask.yAxisPriority}
                                            onChangePriority={(val) => {
                                                const task = updatedTask.getCopy();
                                                task.yAxisPriority = val
                                                setUpdatedTask(task)
                                            }}/>
                                    : <h6 className="capitalize text-xs font-medium inputTextColor">{updatedTask.xAxisPriority}</h6>
                            }
                        </div>

                        <div className="my-3 flex flex-col justify-start content-start my-5">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker label="Deadline" 
                                    value={dayjs(updatedTask.date)} 
                                    onChange={(e) => {
                                        const task = updatedTask.getCopy();
                                        task.date = new Date(dayjs(e?.toDate()).toString())
                                        setUpdatedTask(task)
                                    }}
                                    readOnly={readOnly}/>
                            </LocalizationProvider>
                        </div>

                        {
                            !readOnly 
                                ?   <div className="my-3">
                                        <button className="ml-1 success" onClick={updateTask}>Update</button>
                                    </div>
                                :   null
                        }
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
};

interface ScaleRadioGroupProps {
    priority: string,
    onChangePriority: (val: string) => void
}

const ScaleRadioGroup = (
    props: ScaleRadioGroupProps
) => {
    return (
        <RadioGroup
            row
            aria-labelledby=""
            defaultValue="female"
            name="row-radio-buttons-group"
            onChange={(e) => props.onChangePriority(e.target.value)}
            value={props.priority}
            className="radioGroup"
        >
            <FormControlLabel value="high" control={
                <Radio />
            } label="High" />
            <FormControlLabel value="low" control={
                <Radio />
            } label="Low" />
        </RadioGroup>
    )
}