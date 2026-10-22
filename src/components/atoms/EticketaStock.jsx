function EticketaStock(props){
    return(
        <span className={props.disponible ? "badge bg-success" : "badge bg-danger"}>
            Stock: {props.stock}
        </span>
    );
}

export default EticketaStock;