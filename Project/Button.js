function Button(props) {
    return <button onClick={props.click}>{props.name}</button>
    //return <button onClick={hello}>{props.name}</button>;
}

export default Button;