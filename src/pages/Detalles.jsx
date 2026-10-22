import { useParams } from 'react-router-dom';
import productos from '../data/productos.json';
import { PlantillaPublica } from "../components/templates/PlantillaPublica";

function Detalles(){

    const { nombre } = useParams(); /* Obtiene el nombre de la URL */

    const producto = productos.find(
        (p) => p.nombre === nombre /* Busca el producto en el JSON */
    );

    return(

        <PlantillaPublica>

            <h1>{producto.nombre}</h1>

            <p>Marca: {producto.marca}</p>

            <p>Modelo: {producto.modelo}</p>

            <p>Precio: ${producto.precio}</p>

            <p>Stock: {producto.stock}</p>

            <p>{producto.descripcion}</p>

        </PlantillaPublica>

    );

}

export default Detalles;