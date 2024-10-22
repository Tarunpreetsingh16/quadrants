import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useEffect } from 'react';

interface AlertProps {
    onClose?: () => void,
    showCloseBtn?: boolean,
    title: string,
    children: React.ReactNode
}

export default (
    props: AlertProps
) => {

    return (
        <div className="modalBg absolute w-screen h-screen">
            <div className="w-screen h-screen flex justify-center">
                <div className="modal bg-black self-center flex flex-col animate__animated animate__zoomIn">
                    <div className="self-center w-[80%]">
                        <div className="my-3 flex w-[100%] flex-row justify-between" >
                            <label className="text-2xl">{props.title}</label>
                            {
                                props.showCloseBtn 
                                    ?   <div className="self-center cursor-pointer text-red-600" onClick={props.onClose}>
                                            <HighlightOffIcon className="closeTask"/>
                                        </div>
                                    :   null
                            }
                        </div>
                        <hr />
                        <div className="my-3 flex flex-col">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}