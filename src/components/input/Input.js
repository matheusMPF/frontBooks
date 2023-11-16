const Input = (props) => {
    return (
        <>
            <label>{props.label}
                <input placeholder={props.placeholder} type={props.type} value={props.value} name={props.name}
                    onChange={props.onChange} ></input>
            </label>
        </>
    )
}

export default Input;