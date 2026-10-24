import { Link } from "react-router-dom";
import { PlantillaPublica } from "../components/templates/PlantillaPublica";

function Resultado(){
    const pedido = JSON.parse(
        localStorage.getItem("pedido")
    );
    return(
        <PlantillaPublica>
            <div className="container text-center mt-5">
                <h1 className="text-success">
                    Compra Exitosa ✅
                </h1>
                <p>
                    Número de pedido:
                    {pedido.numero}
                </p>
                <p>
                    Método de entrega:
                    {pedido.entrega}
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