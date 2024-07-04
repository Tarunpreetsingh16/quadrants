import logo from '@/../../public/icons/quadrant_logo.png'
import Image from 'next/image'

interface HeaderProps {
    children: React.ReactNode
}

export default (
    props: HeaderProps
) => {
    return (
        <div className="w-screen header content-center py-3 flex justify-center">
            <Image src={logo} alt='Quadrant logo' width={120} />
            <div className="w-[75%] self-center">
                {props.children}
            </div>
        </div>
    )
}
