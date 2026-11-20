// Funciones para comunicarse con la API del backend (Spring Boot).
// La dirección de la API se configura en el archivo .env.local (VITE_API_URL).
const API_URL = import.meta.env.VITE_API_URL;

async function peticion(ruta, opciones = {}) {
    const token = localStorage.getItem('token');

    const headers = { 'Content-Type': 'application/json' };
    if (token) {
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
        const error = new Error(datos?.mensaje || 'Ocurrió un error inesperado');
        error.status = respuesta.status;
        error.campos = datos?.campos; // errores por campo cuando la API responde 400
        throw error;
    }

    return datos;
}

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
