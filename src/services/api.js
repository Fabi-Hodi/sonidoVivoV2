// funciones para comunicarse con la API del backend (spring Boot)
// La dirección de la API se configura en el archivo .env.local (VITE_API_URL)
import { cerrarSesionLocal, obtenerToken } from './sesion';

const API_URL = import.meta.env.VITE_API_URL;

async function peticion(ruta, opciones = {}) {
    const token = obtenerToken();

    const headers = { 'Content-Type': 'application/json' };
    if (token) {
        // El token del login se envía en cada petición protegida
        headers.Authorization = `Bearer ${token}`;
    }

    let respuesta;
    try {
        respuesta = await fetch(`${API_URL}${ruta}`, { ...opciones, headers });
    } catch {
        throw new Error('No se pudo conectar con el servidor. Intenta más tarde.');
    }

    // 204 = respuesta sin contenido
    const datos = respuesta.status === 204 ? null : await respuesta.json().catch(() => null);

    if (!respuesta.ok) {
        // si habia sesión y el backend responde 401, el token vencio o no es válido
        if (respuesta.status === 401 && token) {
            cerrarSesionLocal();
            window.location.href = '/login?sesion=expirada';
        }
        const error = new Error(datos?.mensaje || 'Ocurrió un error inesperado');
        error.status = respuesta.status;
        error.campos = datos?.campos; // errores por campo cuando la API responde 400
        throw error;
    }

    return datos;
}

// ---------- autenticacion ----------

export function registrarUsuario(usuario) {
    return peticion('/auth/register', {
        method: 'POST',
        body: JSON.stringify(usuario),
    });
}

export function iniciarSesion(correo, password) {
    return peticion('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ correo, password }),
    });
}

export function obtenerMiPerfil() {
    return peticion('/auth/me');
}
