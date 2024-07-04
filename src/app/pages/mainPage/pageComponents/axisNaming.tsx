import Input from '@/app/ui/input';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface AxisNamingProps {
    onClose: () => void,
    onXAxisNameChange: (val: string) => void,
    onYAxisNameChange: (val: string) => void,
    xAxisLabel: string,
    yAxisLabel: string
}

export default (
    props: AxisNamingProps
) => {
    return (
        <div className="modalBg absolute w-screen h-screen">
            <div className="w-screen h-screen flex justify-center">
                <div className="modal bg-black self-center flex flex-col  animate__animated animate__flipInX">
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
                                onChange={props.onXAxisNameChange}
                                value={props.xAxisLabel} />
                        </div>
                        <div className="my-3 flex flex-col">
                            <div className='flex flex-row'>
                                <label>Y-Axis</label>
                                <sup>(<ArrowBackIcon className='w-[15px] rotate-90'/>)</sup>
                            </div>
                            <Input placeholder='Y-Axis label, like "Urgency"...'
                                onChange={props.onYAxisNameChange}
                                value={props.yAxisLabel} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}