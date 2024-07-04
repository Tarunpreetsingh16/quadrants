interface HeaderProps {
    children: React.ReactNode
}

export default (
    props: HeaderProps
) => {
    return (
        <div className="w-screen header content-center py-3 flex justify-center">
            <div className="w-[90%]">
                {props.children}
            </div>
        </div>
    )
}
