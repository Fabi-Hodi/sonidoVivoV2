import EticketaStock from '../atoms/EticketaStock';
import Precio from '../atoms/Precio';

function TarjetaProducto(props){
    return(
        <div className="card borde-catalogo">
            <img src={props.imagen} className="card-img-top p-2 img-Catalogo" alt={props.nombre || "Producto"} />

            <div className="card-body">
                <h5 className="card-title titulo-producto">{props.nombre}</h5>

                <EticketaStock
                    disponible={props.disponible}
                />
            <div className="precio-producto">
                <Precio
                    valor={props.valor}
                />
            </div>
            </div>
        </div>
    );
}

export default TarjetaProducto;