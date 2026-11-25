import { Link } from 'react-router-dom';
import { PlantillaPublica } from '../components/templates/PlantillaPublica';

// mostramos cuando un usuario con sesión intenta abrir una pagina que su rol no permite
function AccesoDenegado() {
    return (
        <PlantillaPublica>
            <div className="container py-5 text-center">
                <h1 className="titulo-seccion mb-3">Acceso denegado</h1>
                <p>Tu rol no tiene permiso para ver esta página.</p>
                <Link to="/" className="btn btn-warning mt-3">Volver al inicio</Link>
            </div>
        </PlantillaPublica>
    );
}

export default AccesoDenegado;
