export default function() {
    return (
        <>
            <div className="w-1 h-screen bg-black absolute right-2/4"> </div>
            <input type="text" placeholder="y-Axis" className="absolute left-2/4 p-1"/>
            <div className="w-screen h-1 bg-black absolute top-2/4"></div>
            <input type="text" placeholder="x-Axis" className="absolute bottom-2/4 p-1"/>
        </>
    )
}