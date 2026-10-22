import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import productos from '../data/productos.json';
import { PlantillaPublica } from "../components/templates/PlantillaPublica";

function Detalles() {
    const { nombre } = useParams(); 
    const navigate = useNavigate(); 
    const { agregarAlCarrito } = useContext(CartContext);

    const producto = productos.find(
        (p) => p.nombre === nombre 
    );

    const manejarCompra = () => {
        agregarAlCarrito(producto); 
        navigate('/carrito');       
    };

    return (
        <PlantillaPublica>
            <h1>{producto.nombre}</h1>
            <p>Marca: {producto.marca}</p>
            <p>Modelo: {producto.modelo}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Stock: {producto.stock}</p>
            <p>{producto.descripcion}</p>

            {/* Mantenemos tu botón limpio, solo con la función y una clase básica de color */}
            <button className="btn btn-warning" onClick={manejarCompra}>
                Agregar al carrito
            </button>
        </PlantillaPublica>
    );
}

export default Detalles;