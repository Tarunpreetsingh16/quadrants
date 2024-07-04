interface QuadrantProps {
    xAxisLabel: string,
    yAxisLabel: string
}

export default function(
    props: QuadrantProps
) {
    return (
        <>
            <div className="w-1 h-screen bg-black absolute right-2/4"> </div>
            <label className="absolute left-2/4 p-1">{props.yAxisLabel}</label>
            <div className="w-screen h-1 bg-black absolute top-2/4"></div>
            <label className="absolute bottom-2/4 p-1">{props.xAxisLabel}</label>
        </>
    )
}