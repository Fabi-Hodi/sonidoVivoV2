import { Navigate, useLocation } from 'react-router-dom';
import { estaAutenticado, obtenerUsuario } from '../services/sesion';

// protege una ruta del frontend:
//  - sin sesion: redirige al login
//  - con sesion pero sin el rol necesario: redirige a "acceso denegado"
// la seguridad real está en el backend (401/403); esto evita mostrar pantallas que no corresponden
function RutaProtegida(props) {
    const location = useLocation();

    if (!estaAutenticado()) {
        return (
            <Navigate
                to="/login"
                replace
                state={{ desde: location.pathname, mensaje: 'Debes iniciar sesión para acceder a esa página.' }}
            />
        );
    }

    const usuario = obtenerUsuario();
    if (props.roles && !props.roles.includes(usuario?.rol)) {
        return <Navigate to="/acceso-denegado" replace />;
    }

    return props.children;
}

export default RutaProtegida;
