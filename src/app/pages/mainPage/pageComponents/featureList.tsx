import IconButton from "@/app/ui/iconButton";
import NoteAddIcon from '@mui/icons-material/NoteAdd';

interface FeaturesProps {
    containerCss: string,
    onCreateNewTask: () => void
}

export default (
    props: FeaturesProps
) => {
    return (
        <div className={`flex features ${props.containerCss}`}>
            <IconButton icon={<NoteAddIcon className="self-center" />} 
                onClick={props.onCreateNewTask}
                text="New task" 
                key={"New Task Button"}/>
        </div>
    );
}
