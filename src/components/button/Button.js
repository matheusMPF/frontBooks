const Button = (props) => {
    return(
        <>
            <button className={props.className} onClick={props.onClick} >{props.nameButton}</button>
        </>
    )

}
export default Button;