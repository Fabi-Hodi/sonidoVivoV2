import { useParams, useNavigate, Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { PlantillaPublica } from "../components/templates/PlantillaPublica";
import { obtenerProductoPorCodigo } from '../services/api';

function Detalles() {
    const { codigo } = useParams();
    const navigate = useNavigate();

    //extraemos la lista del carrito de context
    const { carrito, agregarAlCarrito } = useContext(CartContext);

    // el producto se pide a la API (GET /productos/codigo/{codigo})
    const [producto, setProducto] = useState(null);
    const [error, setError] = useState('');
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        obtenerProductoPorCodigo(codigo)
            .then((datos) => setProducto(datos))
            .catch((err) => setError(err.status === 404 ? 'El producto no existe' : err.message));
    }, [codigo]);

    if (error) {
        return (
            <PlantillaPublica>
                <div className="container mt-5 text-white text-center">
                    <h1 className="mb-4">{error}</h1>
                    <Link to="/catalogo" className="btn btn-warning">Volver al catálogo</Link>
                </div>
            </PlantillaPublica>
        );
    }

    if (!producto) {
        return (
            <PlantillaPublica>
                <p className="container mt-5 text-white">Cargando producto...</p>
            </PlantillaPublica>
        );
    }

    //buscamos cuantas unidades de un producto ya estan en el carro
    const productoEnCarrito = carrito.find((p) => p.id === producto.id);
    const cantidadYaEnCarrito = productoEnCarrito ? productoEnCarrito.cantidad : 0;

    //calculamos el stock que queda disponible
    const stockRestante = producto.stock - cantidadYaEnCarrito;

    const manejarCompra = () => {
        // se guarda el id real del producto: es el que se envia al crear el pedido
        const productoEmpaquetado = {
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            stock: producto.stock,
            imagen: producto.imagen || "/img/logo.png"
        };

        agregarAlCarrito(productoEmpaquetado, cantidad);
        navigate('/carrito');
    };

    return (
        <PlantillaPublica>
            <div className="container mt-5 text-white pb-5">
                <h1 className='mb-5'>{producto.nombre}</h1>
                <div className='row'>
                    <div className='col-md-6'>
                        <img
                            src={producto.imagen}
                            alt={producto.nombre}
                            className='img-detalle'

                        />
                    </div>

                    <div className='col-md-6 detalle-card detalle-texto'>
                        <p><strong>Marca:</strong> {producto.marca}</p>
                        <p><strong>Modelo:</strong> {producto.modelo}</p>
                        <p className="fs-3 text-warning fw-bold">
                            ${producto.precio}
                        </p>
                        <p><strong>Stock disponible:</strong> {producto.stock} </p>

                        <h3 className="mt-4"><strong> Descripción </strong></h3>
                        <p className="descripcion-detalle"> {producto.descripcion} </p>


                        {/* si no queda stock ocultamos el selector */}
                        {stockRestante > 0 ? (
                            <>
                                <div className="d-flex align-items-center mt-4 gap-3">
                                    <button
                                        className="btn btn-outline-light px-3"
                                        onClick={() => setCantidad(Math.max(1, cantidad - 1))}
                                        disabled={cantidad <= 1}
                                    >
                                        -
                                    </button>

                                    <span className="fs-5 fw-bold text-white">{cantidad}</span>

                                    {/* el limite superior es el stockRestante */}
                                    <button
                                        className="btn btn-outline-light px-3"
                                        onClick={() => setCantidad(Math.min(stockRestante, cantidad + 1))}
                                        disabled={cantidad >= stockRestante}
                                    >
                                        +
                                    </button>
                                </div>

                                {cantidad >= stockRestante && (
                                    <p className="text-danger mt-2 mb-0" style={{ fontSize: '0.9rem' }}>
                                        Alcanzaste el límite disponible para agregar.
                                    </p>
                                )}

                                <button
                                    className="btn btn-warning mt-4 btn-agregar"
                                    onClick={manejarCompra}
                                >
                                    Agregar al carrito
                                </button>
                            </>
                        ) : (

                            <div className="mt-4">
                                <p className="text-danger fw-bold mb-2">
                                    {producto.stock === 0
                                        ? 'Producto agotado.'
                                        : 'Ya tienes todo el stock disponible de este producto en tu carrito.'}
                                </p>
                                <button className="btn btn-secondary fw-bold px-4 py-2" disabled>
                                    Sin stock adicional
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </PlantillaPublica>
    );
}

export default Detalles;
