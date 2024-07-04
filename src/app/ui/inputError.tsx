
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

interface InputErrorProps {
    text: string
}

export default (
    props: InputErrorProps
) => {
    return (
        <div className='flex flex-row items-end error'>
            <ReportGmailerrorredIcon />
            <h6 className='self-center'>{props.text}</h6>
        </div>
    )
}