import Input from "@/app/ui/input";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { grey, pink, red, yellow } from "@mui/material/colors";

export default function () {
    return (
        <div className="modalBg absolute w-screen h-screen">
            <div className="w-screen h-screen flex justify-center">
            <div className="modal bg-black self-center flex flex-col">
                    <div className="self-center w-[80%]">
                        <div className="my-3 flex flex-col">
                            <label>Title</label>
                            <Input />
                        </div>
                        
                        <div className="my-3 flex flex-col">
                            <label>Description</label>
                            <textarea className="rounded-sm font-medium px-1 font-medium resize-none h-[100px]" 
                                placeholder="Tickets needs to created by Monday for etransfer initiative..." />
                        </div>

                        <div className="my-3 flex flex-row">
                            <label className="w-[120px] self-center">Importance</label>
                            <ScaleRadioGroup/>
                        </div>
                        <div className="my-3 flex flex-row">
                            <label className="w-[120px] self-center">Urgency</label>
                            <ScaleRadioGroup/>
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
                <Radio sx={{
                    color: grey[800],
                    '&.Mui-checked': {
                        color: grey[800]
                    },
                }}/>
            } label="High" />
            <FormControlLabel value="female" control={
                <Radio sx={{
                    color: grey[800],
                    '&.Mui-checked': {
                        color: grey[800]
                    },
                }}/>
            } label="Low" />
        </RadioGroup>
    )
}