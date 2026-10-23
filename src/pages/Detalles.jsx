import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react'; 
import { CartContext } from '../context/CartContext';
import productos from '../data/productos.json';
import { PlantillaPublica } from "../components/templates/PlantillaPublica";

function Detalles() {
    const { codigo } = useParams(); 
    const navigate = useNavigate(); 
    
    //extraemos la lista del carrito de context
    const { carrito, agregarAlCarrito } = useContext(CartContext);
    
    const producto = productos.find((p) => p.codigo === codigo);

    //buscamos cuantas unidades de un producto ya estan en el carro
    const productoEnCarrito = carrito.find((p) => p.nombre === producto.nombre);
    const cantidadYaEnCarrito = productoEnCarrito ? productoEnCarrito.cantidad : 0;
    
    //calculamos el stock que queda disponible
    const stockRestante = producto.stock - cantidadYaEnCarrito;

    //sii ya no hay stock el contador arranca en 0. Si hay, arranca en 1
    const [cantidad, setCantidad] = useState(stockRestante > 0 ? 1 : 0); 

    const manejarCompra = () => {
        const productoEmpaquetado = {
            id: producto.id || Date.now(),
            nombre: producto.nombre,
            precio: producto.precio,
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
                        <p><strong>Stock inicial:</strong> {producto.stock} </p>

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
                                <p className="text-danger fw-bold mb-2">Ya tienes todo el stock disponible de este producto en tu carrito.</p>
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