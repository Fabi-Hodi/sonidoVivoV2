import EticketaStock from '../atoms/EticketaStock';
import Precio from '../atoms/Precio';

function TarjetaProducto(props){
    return(
        <div className="card" style={{ width: '18rem'}}>
            <img src={props.imagen} className="card-img-top" alt="Producto" />

            <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>

                <EticketaStock
                    disponible={props.disponible}
                />

                <Precio
                    valor={props.valor}
                />


            </div>
        </div>
    );
}

export default TarjetaProducto;