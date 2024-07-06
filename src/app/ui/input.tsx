interface InputProps {
    placeholder: string,
    value: string,
    onChange: (val: string) => void,
    readOnly?: boolean
}

export default function(
    props: InputProps
) {
    return (
        <input type="text" 
            className={`w-[100%] inputField font-medium rounded-sm px-1`}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            readOnly={props.readOnly ?? false}
            />
    )
}