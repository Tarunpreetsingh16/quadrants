interface IconButtonProps {
    icon: React.ReactNode,
    text: string,
    onClick: () => void
}

export default (
    props: IconButtonProps
) => {
    return (
        <div className="flex flex-row cursor-pointer featureButton rounded-sm" onClick={props.onClick}>
            {props.icon}
            <button> {props.text} </button>
        </div>
    )
}