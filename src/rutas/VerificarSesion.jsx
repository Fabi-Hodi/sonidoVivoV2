import { useEffect } from 'react';
import { obtenerMiPerfil } from '../services/api';
import { estaAutenticado, guardarUsuario } from '../services/sesion';

// al cargar o recargar la pagina, si hay un token guardado se valida con el backend (GET /auth/me)
// si sigue válido, se actualizan los datos del usuario (por ejemplo, si un administrador le cambió el rol)
// si vencio o la cuenta fue desactivada, api.js cierra la sesión y envía al login
function VerificarSesion() {
    useEffect(() => {
        if (estaAutenticado()) {
            obtenerMiPerfil()
                .then((usuario) => guardarUsuario(usuario))
                .catch(() => {});
        }
    }, []);

    return null;
}

export default VerificarSesion;
