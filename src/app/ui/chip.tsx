import { DragEvent } from "react"

interface ChipProps {
    title: string,
    bgColor?: string,
    textColor?: string,
    onClick: () => void,
    animation: string,
    id: string,
    onDragStart: (event: DragEvent<HTMLDivElement>) => void
}

export default (
    props: ChipProps
) => {

    return (
        <div className={`chip select-none rounded-2xl py-1 px-2 ${props.textColor} animate__animated ${props.animation}`} onClick={props.onClick}
            style={{
                backgroundColor: props.bgColor
            }}
            id={props.id}
            draggable
            onDragStart={(event) => props.onDragStart(event)}>
            
            {props.title}
        </div>
    )

}
