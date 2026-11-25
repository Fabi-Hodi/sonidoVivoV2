// manejo de la sesion en el navegador
// el token (JWT) y los datos publicos del usuario se guardan en localStorage
// para que la sesion se mantenga aunque se recargue la pagina

// la API devuelve el rol en mayusculas (ej. "ADMINISTRADOR")
// la app lo usa como "Administrador", asi que se adapta aqui
export function formatearRol(rol) {
    return rol.charAt(0) + rol.slice(1).toLowerCase();
}

export function guardarSesion(token, usuario) {
    localStorage.setItem('token', token);
    guardarUsuario(usuario);
}

export function guardarUsuario(usuario) {
    localStorage.setItem('usuario', JSON.stringify({
        ...usuario,
        rol: formatearRol(usuario.rol),
    }));
}

export function obtenerToken() {
    return localStorage.getItem('token');
}

export function obtenerUsuario() {
    const usuario = localStorage.getItem('usuario');
    return usuario ? JSON.parse(usuario) : null;
}

export function estaAutenticado() {
    return Boolean(obtenerToken());
}

export function cerrarSesionLocal() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
}
