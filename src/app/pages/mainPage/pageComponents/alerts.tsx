interface DiscardChangeAlertContentProps {
    onClickNo: () => void
    onClickYes: () => void
}

export const DiscardChangeAlertContent = (
    props: DiscardChangeAlertContentProps
) => 
    <div>
        <label>Unsaved changes will be lost. Click "yes" to discard, or "no" to keep editing.</label>
        <div className="my-3">
            <button className="ml-1 success"
                onClick={props.onClickNo}>No</button>
            <button className="ml-1 warning"
                onClick={props.onClickYes}>Yes</button>
        </div>
    </div>


interface DeleteTaskAlertContentProps {
    onClickNo: () => void
    onClickYes: () => void
}


export const DeleteTaskAlertContent = (
    props: DeleteTaskAlertContentProps
) => 
    <div>
        <label>Task will be deleted and cannot be recovered. Do you still want to proceed?</label>
        <div className="my-3">
            <button className="ml-1 success"
                onClick={props.onClickNo}>No</button>
            <button className="ml-1 warning"
                onClick={props.onClickYes}>Yes</button>
        </div>
    </div>