

function Categoria(props){
    return(
    
        <div className="tarjeta-categoria text-center">
            <img src={props.imagen} 
            alt={props.nomInstrumento  || "Producto"} className="img-fluid rounded"/>

            <p className="texto-categoria mt-2">{props.nombreCategoria}</p>
        </div>
    );

}

export default Categoria;