import Input from "@/app/ui/input";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from "react";
import dayjs from "dayjs";
import { Task } from "@/app/data/task";

interface NewTaskProps {
    onClose: () => void,
    xAxisLabel: string,
    yAxisLabel: string,
    onCreateNewTask: (task: Task) => void
}

export default function(
    props: NewTaskProps
) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(dayjs(new Date()))
    const [xLabelPriority, setXLabelPriority] = useState("high");
    const [yLabelPriority, setYLabelPriority] = useState("high");

    const createTask = () => {
        const task = new Task(title, description, new Date(dayjs(date).toString()), xLabelPriority, yLabelPriority);
        props.onCreateNewTask(task)
    }

    return (
        <div className="modalBg absolute w-screen h-screen">
            <div className="w-screen h-screen flex justify-center">
                <div className="modal bg-black self-center flex flex-col  animate__animated animate__zoomIn">
                    <div className="self-center w-[80%]">
                        <div className="my-3 flex w-[100%] flex-row justify-between" >
                            <label className="text-2xl">New Task</label>
                            <div className="self-center cursor-pointer" 
                                onClick={props.onClose}>
                                <HighlightOffIcon className="closeTask"/>
                            </div>
                        </div>
                        <hr />
                        <div className="my-3 flex flex-col">
                            <label>Title</label>
                            <Input 
                                placeholder="Need to create tickets..."
                                value={title} 
                                onChange={setTitle} />
                        </div>
                        
                        <div className="my-3 flex flex-col">
                            <label>Description</label>
                            <textarea className="rounded-sm font-medium px-1 font-medium resize-none leading-[2] h-[100px]" 
                                placeholder="Tickets needs to created by Monday for etransfer initiative..." 
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}/>
                        </div>

                        <div className="my-3 flex flex-col">
                            <label>{props.xAxisLabel}</label>
                            <ScaleRadioGroup
                                priority={xLabelPriority}
                                onChangePriority={setXLabelPriority}/>
                        </div>

                        <div className="my-3 flex flex-col">
                            <label>{props.yAxisLabel}</label>
                            <ScaleRadioGroup
                                priority={yLabelPriority}
                                onChangePriority={setYLabelPriority}/>
                        </div>

                        <div className="my-3 flex flex-col justify-start content-start my-5">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker label="Deadline" 
                                    value={date} 
                                    onChange={(e) => setDate(dayjs(e?.toDate()))}/>
                            </LocalizationProvider>
                        </div>

                        <div className="my-3">
                            <button className="ml-1 success" onClick={createTask}>Create</button>
                        </div>
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