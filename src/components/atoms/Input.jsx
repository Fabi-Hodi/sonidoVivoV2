function Input(props){
    const tipo = props.tipo || "text";

    return(
        <div className="campo-input">
            <input
                type={tipo}
                className={props.error ? "form-control is-invalid" : "form-control"}
                id={props.id}
                placeholder={props.placeholder}
                value={props.valor}
                onChange={props.onChange}
                required={props.required}
            />
            {props.error && (
                <div className="invalid-feedback">{props.error}</div>
            )}
        </div>
    )
}

export default Input;
