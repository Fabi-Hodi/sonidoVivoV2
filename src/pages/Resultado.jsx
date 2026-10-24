import { Link } from "react-router-dom";
import { PlantillaPublica } from "../components/templates/PlantillaPublica";

function Resultado(){
    const pedido = JSON.parse(
        localStorage.getItem("pedido")
    );

    if (!pedido) {
    return (
        <PlantillaPublica>
            <div className="container text-center mt-5">
                <h1>No existe ningún pedido</h1>
                <Link to="/" className="btn btn-warning">
                    Volver al inicio
                </Link>
            </div>
        </PlantillaPublica>
    );
    }

    return(
        <PlantillaPublica>
            <div className="container text-center mt-5">
                <h1 className="text-success">
                    Compra Exitosa ✅
                </h1>
                <p className="fs-4">
                    <strong>Número de pedido:</strong> {pedido.numero}
                </p>

                <p className="fs-5">
                    <strong>Método de entrega:</strong> {pedido.entrega}
                </p>
                <Link
                    to="/"
                    className="btn btn-warning"
                >
                    Volver al Inicio
                </Link>
            </div>
        </PlantillaPublica>
    );
}

export default Resultado;