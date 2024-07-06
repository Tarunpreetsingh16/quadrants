import Input from '@/app/ui/input';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import InputError from '@/app/ui/inputError';
import { Err } from '@/app/data/error';
import { Axes } from '@/app/data/axes';

interface AxisNamingProps {
    onClose: () => void,
    xAxisLabel: string,
    yAxisLabel: string,
    onUpdate: (axes: Axes) => void
}

export default (
    props: AxisNamingProps
) => {


    const [xAxisLabel, setXAxisLabel] = useState(props.xAxisLabel);
    const [yAxisLabel, setYAxisLabel] = useState(props.yAxisLabel);
    const [xAxisError, setXAxisError] = useState(new Err(false, ''));
    const [yAxisError, setYAxisError] = useState(new Err(false, ''));

    const onUpdate = () => {
        let hasError = false
        if (!xAxisLabel || xAxisLabel.trim().length === 0 ||  xAxisLabel.trim().length >= 13) {
            setXAxisError(new Err(true, 'Please enter x-axis label (min 1 and max 12)'))
            hasError = true
        } else {
            setXAxisError(new Err(false, ''))
        }
        if (!yAxisLabel || yAxisLabel.trim().length === 0 || yAxisLabel.trim().length >= 13) {
            setYAxisError(new Err(true, 'Please enter y-axis label (min 1 and max 12)'))
            hasError = true
        } else {
            setYAxisError(new Err(false, ''))
        }
        if (hasError) return;
        props.onUpdate(new Axes(xAxisLabel.trim(), yAxisLabel.trim()))
    }

    return (
        <div className="modalBg absolute w-screen h-screen">
            <div className="w-screen h-screen flex justify-center">
                <div className="modal bg-black self-center flex flex-col  animate__animated animate__zoomIn">
                    <div className="self-center w-[80%]">
                        <div className="my-3 flex w-[100%] flex-row justify-between" >
                            <label className="text-2xl">Edit Axes</label>
                            <div className="self-center cursor-pointer text-red-600" 
                                onClick={props.onClose}>
                                <HighlightOffIcon className="closeTask"/>
                            </div>
                        </div>
                        <hr />
                        <div className="my-3 flex flex-col">
                            <div className='flex flex-row'>
                                <label>X-Axis</label>
                                <sup>(<ArrowBackIcon className='w-[15px]'/>)</sup>
                            </div>
                            <Input placeholder='X-Axis label, like "Importance"...'
                                onChange={setXAxisLabel}
                                value={xAxisLabel} />
                            {
                                xAxisError.hasError 
                                    ? <InputError text={xAxisError.msg} />
                                    : null
                            }
                        </div>
                        <div className="my-3 flex flex-col">
                            <div className='flex flex-row'>
                                <label>Y-Axis</label>
                                <sup>(<ArrowBackIcon className='w-[15px] rotate-90'/>)</sup>
                            </div>
                            <Input placeholder='Y-Axis label, like "Urgency"...'
                                onChange={setYAxisLabel}
                                value={yAxisLabel} />
                            {
                                yAxisError.hasError 
                                    ? <InputError  text={yAxisError.msg} />
                                    : null
                            }
                        </div>
                        <div className="my-3">
                            <button className="ml-1 success" onClick={onUpdate}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}