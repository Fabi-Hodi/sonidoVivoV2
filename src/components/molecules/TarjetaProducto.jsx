import { Link } from 'react-router-dom';
import EticketaStock from '../atoms/EticketaStock';
import Precio from '../atoms/Precio';

function TarjetaProducto(props){
    return(
        <Link to={`/detalles/${props.nombre}`} className="text-decoration-none">
        <div className="card borde-catalogo">
            <img src={props.imagen} className="card-img-top p-2 img-Catalogo" alt={props.nombre || "Producto"} />

            <div className="card-body">
                <h5 className="card-title titulo-producto">{props.nombre}</h5>

                <EticketaStock
                    disponible={props.disponible}
                    stock={props.stock}
                />
            <div className="precio-producto">
                <Precio
                    valor={props.valor}
                />
            </div>
            </div>
        </div>
        </Link>
    );
}

export default TarjetaProducto;