

import { Link } from 'react-router-dom';

function Categoria(props) {
    return (
        <div 
            className="categoria-card" 
            style={{ backgroundImage: `url(${props.imagen})` }}
        >
            <p>{props.nombreCategoria}</p>
            
            {/* Si a futuro quieres rutas distintas, puedes pasarle props.ruta. Por ahora va a /catalogo */}
            <Link to="/catalogo" className="enlace-categoria">
                Ver Más
            </Link>
        </div>
    );
}

export default Categoria;