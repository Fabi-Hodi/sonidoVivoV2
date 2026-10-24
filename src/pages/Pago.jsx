import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlantillaPublica } from "../components/templates/PlantillaPublica";

function Pago(){
    const navigate = useNavigate();
    const [entrega, setEntrega] = useState("retiro");
    const confirmarCompra = () => {
        const numeroPedido = Date.now();
        localStorage.setItem(
            "pedido",
            JSON.stringify({
                numero: numeroPedido,
                entrega
            })
        );
        navigate("/resultado");
    };
    return(
        <PlantillaPublica>
            <div className="container mt-5">
                <h1>Confirmación de Compra</h1>
                <h3>Entrega</h3>
                <div>
                    <input
                        type="radio"
                        value="retiro"
                        checked={entrega === "retiro"}
                        onChange={(e)=>setEntrega(e.target.value)}
                    />
                    Retiro en tienda
                </div>
                <div>
                    <input
                        type="radio"
                        value="domicilio"
                        checked={entrega === "domicilio"}
                        onChange={(e)=>setEntrega(e.target.value)}
                    />
                    Despacho a domicilio
                </div>
                {entrega === "domicilio" && (
                    <input
                        className="form-control mt-3"
                        placeholder="Dirección"
                    />
                )}
                <h3 className="mt-4">
                    Pago
                </h3>
                <input
                    className="form-control mb-2"
                    placeholder="Número de tarjeta"
                />
                <input
                    className="form-control mb-2"
                    placeholder="MM/AA"
                />
                <input
                    className="form-control"
                    placeholder="CVV"
                />
                <button
                    className="btn btn-warning mt-4"
                    onClick={confirmarCompra}
                >
                    Confirmar Compra
                </button>
            </div>

        </PlantillaPublica>
    );
}

export default Pago;