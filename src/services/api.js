// funciones para comunicarse con la API del backend (Spring Boot) usando axios.
// la dirección de la API se configura en el archivo .env.local (VITE_API_URL).
import axios from 'axios';
import { cerrarSesionLocal, obtenerToken } from './sesion';

// cliente de axios con la dirección base de la API
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: { 'Content-Type': 'application/json' },
});

// interceptor de solicitud. agrega el token del login a cada peticion protegida
api.interceptors.request.use((config) => {
    const token = obtenerToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// interceptor de respuesta. devuelve solo los datos y unifica el manejo de errores
api.interceptors.response.use(
    (respuesta) => respuesta.data,
    (err) => {
        // Sin respuesta = el servidor no esta disponible o no hay conexion
        if (!err.response) {
            return Promise.reject(new Error('No se pudo conectar con el servidor. Intenta más tarde.'));
        }

        const { status, data } = err.response;

        // si habia sesion y el backend responde 401, el token vencio o no es valido
        if (status === 401 && obtenerToken()) {
            cerrarSesionLocal();
            window.location.href = '/login?sesion=expirada';
        }

        const error = new Error(data?.mensaje || 'Ocurrió un error inesperado');
        error.status = status;
        error.campos = data?.campos; // errores por campo cuando la API responde 400
        return Promise.reject(error);
    }
);

// ---------- autenticacion ----------

export function registrarUsuario(usuario) {
    return api.post('/auth/register', usuario);
}

export function iniciarSesion(correo, password) {
    return api.post('/auth/login', { correo, password });
}

export function obtenerMiPerfil() {
    return api.get('/auth/me');
}

// ---------- usuarios ----------

export function listarUsuarios() {
    return api.get('/usuarios');
}

export function crearUsuario(usuario) {
    return api.post('/usuarios', usuario);
}

export function actualizarUsuario(id, datos) {
    return api.put(`/usuarios/${id}`, datos);
}

export function cambiarRolUsuario(id, rol) {
    return api.patch(`/usuarios/${id}/rol`, { rol });
}

export function desactivarUsuario(id) {
    return api.delete(`/usuarios/${id}`);
}

export function reactivarUsuario(id) {
    return api.patch(`/usuarios/${id}/reactivar`);
}

// ---------- catalogo ----------

export function listarProductos() {
    return api.get('/productos');
}

export function obtenerProductoPorCodigo(codigo) {
    return api.get(`/productos/codigo/${codigo}`);
}

export function listarCategorias() {
    return api.get('/categorias');
}

export function crearProducto(producto) {
    return api.post('/productos', producto);
}

export function actualizarProducto(id, producto) {
    return api.put(`/productos/${id}`, producto);
}

export function borrarProducto(id) {
    return api.delete(`/productos/${id}`);
}

// ---------- pedidos ----------

export function crearPedido(pedido) {
    return api.post('/pedidos', pedido);
}

export function listarPedidos() {
    return api.get('/pedidos');
}

export function obtenerPedido(id) {
    return api.get(`/pedidos/${id}`);
}

export function cambiarEstadoPedido(id, estado) {
    return api.patch(`/pedidos/${id}/estado`, { estado });
}

export function cancelarPedido(id) {
    return api.patch(`/pedidos/${id}/cancelar`);
}

export default api;
