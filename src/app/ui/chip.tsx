interface ChipProps {
    id: number,
    title: string,
    bgColor?: string,
    textColor?: string
}

export default (
    props: ChipProps
) => {

    return (
        <div className={`chip rounded-2xl py-1 px-2 ${props.textColor}`}
            style={{
                backgroundColor: props.bgColor
            }}>
            {props.title}
        </div>
    )
}
