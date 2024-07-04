import Input from "@/app/ui/input";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface NewTaskProps {
    onClose: () => void,
    xAxisLabel: string,
    yAxisLabel: string
}

export default function(
    props: NewTaskProps
) {
    return (
        <div className="modalBg absolute w-screen h-screen">
            <div className="w-screen h-screen flex justify-center">
            <div className="modal bg-black self-center flex flex-col  animate__animated animate__flipInX">
                    <div className="self-center w-[80%]">
                        <div className="my-3 flex w-[100%] flex-row justify-between" >
                            <label className="text-2xl">New Task</label>
                            <div className="self-center cursor-pointer text-red-600" 
                                onClick={props.onClose}>
                                <HighlightOffIcon className="closeTask"/>
                            </div>
                        </div>
                        <hr />
                        <div className="my-3 flex flex-col">
                            <label>Title</label>
                            <Input placeholder="Need to create tickets..."/>
                        </div>
                        
                        <div className="my-3 flex flex-col">
                            <label>Description</label>
                            <textarea className="rounded-sm font-medium px-1 font-medium resize-none h-[100px]" 
                                placeholder="Tickets needs to created by Monday for etransfer initiative..." />
                        </div>

                        <div className="my-3 flex flex-row">
                            <label className="w-[120px] self-center">{props.xAxisLabel}</label>
                            <ScaleRadioGroup/>
                        </div>

                        <div className="my-3 flex flex-row">
                            <label className="w-[120px] self-center">{props.yAxisLabel}</label>
                            <ScaleRadioGroup/>
                        </div>

                        <div className="my-3 flex flex-col justify-start content-start my-5">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker label="Task deadline picker" />
                            </LocalizationProvider>
                        </div>

                        <div className="my-3">
                            <button className="ml-1 success">Create Task</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
};

const ScaleRadioGroup = () => {
    return (
        <RadioGroup
            row
            aria-labelledby=""
            defaultValue="female"
            name="row-radio-buttons-group"
        >
            <FormControlLabel value="high" control={
                <Radio />
            } label="High" />
            <FormControlLabel value="female" control={
                <Radio />
            } label="Low" />
        </RadioGroup>
    )
}