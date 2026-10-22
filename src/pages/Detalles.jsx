import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react'; 
import { CartContext } from '../context/CartContext';
import productos from '../data/productos.json';
import { PlantillaPublica } from "../components/templates/PlantillaPublica";

function Detalles() {
    const { nombre } = useParams(); 
    const navigate = useNavigate(); 
    
    //extraemos la lista del carrito de context
    const { carrito, agregarAlCarrito } = useContext(CartContext);
    
    const producto = productos.find((p) => p.nombre === nombre);

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
                <h1>{producto.nombre}</h1>
                <p>Marca: {producto.marca}</p>
                <p>Modelo: {producto.modelo}</p>
                <p className="fs-4 text-warning fw-bold">Precio: ${producto.precio}</p>
                <p>Stock inicial: {producto.stock} | <strong>Disponibles para agregar: {stockRestante}</strong></p>
                <p>{producto.descripcion}</p>

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
                            className="btn btn-warning mt-4 fw-bold px-4 py-2" 
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
        </PlantillaPublica>
    );
}

export default Detalles;