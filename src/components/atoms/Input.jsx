function Input(props){
    const tipo = props.tipo || "text";

    return(
        <input 
            type={tipo} 
            className="form-control" 
            id={props.id}
            placeholder={props.placeholder}
            value={props.valor}
            onChange={props.onChange}
        />
    )
}

export default Input;