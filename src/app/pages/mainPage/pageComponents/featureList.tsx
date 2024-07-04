import IconButton from "@/app/ui/iconButton";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import EditIcon from '@mui/icons-material/Edit';

interface FeaturesProps {
    containerCss: string,
    onCreateNewTask: () => void,
    onEditAxes: () => void
}

export default (
    props: FeaturesProps
) => {
    return (
        <div className={`flex features ${props.containerCss}`}>
            
            <IconButton icon={<EditIcon className="self-center" />} 
                onClick={props.onEditAxes}
                text="Label axes" 
                key={"Label axes button"}/>
            
            <IconButton icon={<NoteAddIcon className="self-center" />} 
                onClick={props.onCreateNewTask}
                text="New task" 
                key={"New Task Button"}/>

        </div>
    );
}
