function EticketaStock(props){
    return(
        <span className={props.disponible ? "badge bg-succes" : "badge bg-danger"}>
            {props.disponible ? "En Stock" : "Agotado"}
        </span>
    );
}

export default EticketaStock;