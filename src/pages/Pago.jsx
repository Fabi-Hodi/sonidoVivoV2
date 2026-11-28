import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { PlantillaPublica } from "../components/templates/PlantillaPublica";
import Mensaje from "../components/atoms/Mensaje";
import { CartContext } from "../context/CartContext";
import { crearPedido } from "../services/api";

function Pago(){
    const navigate = useNavigate();
    const { carrito, vaciarCarrito } = useContext(CartContext);

    const [entrega, setEntrega] = useState("RETIRO");
    const [direccion, setDireccion] = useState("");
    const [tarjeta, setTarjeta] = useState("");
    const [error, setError] = useState("");
    const [enviando, setEnviando] = useState(false);

    const total = carrito.reduce((suma, p) => suma + (p.precio * p.cantidad), 0);

    // crea el pedido en la API (POST /pedidos). el backend revisa el stock y calcula el total
    const confirmarCompra = async (e) => {
        e.preventDefault();
        setError("");

        const digitos = tarjeta.replace(/\D/g, "");
        if (digitos.length < 12) {
            setError("El número de tarjeta no es válido");
            return;
        }

        // solo se envian los ultimos 4 digitos de la tarjeta, nunca el numero completo ni el CVV
        const pedido = {
            items: carrito.map((p) => ({ productoId: p.id, cantidad: p.cantidad })),
            tipoEntrega: entrega,
            direccionDespacho: entrega === "DOMICILIO" ? direccion.trim() : null,
            ultimosDigitosTarjeta: digitos.slice(-4)
        };

        setEnviando(true);
        try {
            const creado = await crearPedido(pedido);
            localStorage.setItem(
                "pedido",
                JSON.stringify({
                    numero: creado.id,
                    entrega: creado.tipoEntrega === "DOMICILIO" ? "Despacho a domicilio" : "Retiro en tienda",
                    total: creado.total,
                    estado: creado.estado
                })
            );
            vaciarCarrito();
            navigate("/resultado");
        } catch (err) {
            // por ejemplo 409 si un producto ya no tiene stock suficiente
            setError(err.message);
        } finally {
            setEnviando(false);
        }
    };

    if (carrito.length === 0) {
        return (
            <PlantillaPublica>
                <div className="container mt-5 pb-5 text-center text-white">
                    <h1 className="mb-4">Tu carrito está vacío</h1>
                    <Link to="/catalogo" className="btn btn-warning">Ir al catálogo</Link>
                </div>
            </PlantillaPublica>
        );
    }

    return(
        <PlantillaPublica>
            <div className="container mt-5 pb-5">
                <div className="pago-card">
                    <h1>Confirmación de Compra</h1>
                    <hr className="separador" />

                    <Mensaje texto={error} tipo="error" />

                    <p className="fs-5">
                        <strong>Total:</strong> ${total}
                    </p>

                    <form onSubmit={confirmarCompra}>

                    <h3>Entrega</h3>
                <div>
                    <input
                        type="radio"
                        value="RETIRO"
                        checked={entrega === "RETIRO"}
                        onChange={(e)=>setEntrega(e.target.value)}

                    />
                    Retiro en tienda
                </div>
                <div>
                    <input
                        type="radio"
                        value="DOMICILIO"
                        checked={entrega === "DOMICILIO"}
                        onChange={(e)=>setEntrega(e.target.value)}
                    />
                    Despacho a domicilio
                </div>
                {entrega === "DOMICILIO" && (
                    <input
                        className="form-control mt-3"
                        placeholder="Dirección"
                        value={direccion}
                        onChange={(e)=>setDireccion(e.target.value)}
                        required
                    />
                )}
                <h3 className="mt-4">
                    Pago
                </h3>
                <input
                    className="form-control mb-2"
                    placeholder="Número de tarjeta"
                    inputMode="numeric"
                    value={tarjeta}
                    onChange={(e)=>setTarjeta(e.target.value)}
                    required
                />
                <input
                    className="form-control mb-2"
                    placeholder="MM/AA"
                    required
                />
                <input
                    className="form-control"
                    placeholder="CVV"
                    required
                />
                <button
                    type="submit"
                    className="btn btn-warning mt-4"
                    disabled={enviando}
                >
                    {enviando ? "Procesando..." : "Confirmar Compra"}
                </button>
                </form>
            </div>
        </div>

        </PlantillaPublica>
    );
}

export default Pago;
