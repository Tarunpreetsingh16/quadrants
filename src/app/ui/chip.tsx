interface ChipProps {
    title: string,
    bgColor?: string,
    textColor?: string,
    onClick: () => void,
    animation: string
}

export default (
    props: ChipProps
) => {

    return (
        <div className={`chip rounded-2xl py-1 px-2 ${props.textColor} animate__animated ${props.animation}`} onClick={props.onClick}
            style={{
                backgroundColor: props.bgColor
            }}>
            {props.title}
        </div>
    )
}
