interface InputProps {
    placeholder: string,
    value: string,
    onChange: (val: string) => void
}

export default function(
    props: InputProps
) {
    return (
        <input type="text" 
            className="w-[100%] inputField px-1 font-medium rounded-sm" 
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}/>
    )
}