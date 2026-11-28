
## Integrantes
- Fabian Muñoz (fa.munoz2@duocuc.cl)
- Jonathan Pozo (jon.pozo@duocuc.cl)


## Caso
Sonido Vivo

## Descripción del caso
Tienda en línea de instrumentos musicales.
La aplicación permite iniciar sesión, explorar el catálogo, agregar productos
al carrito y, para el rol administrador, gestionar el catálogo.

## Estructura del proyecto
```txt
src
│
├── components
│   │
│   ├── atoms
│   │   ├── Boton.jsx
│   │   ├── CampoTexto.jsx
│   │   ├── ContadorCantidad.jsx
│   │   ├── EticketaStock.jsx
│   │   ├── Input.jsx
│   │   ├── Mensaje.jsx
│   │   ├── Precio.jsx
│   │   ├── Selector.jsx
│   │   └── Separador.jsx
│   │
│   ├── molecules
│   │   ├── CampoFormulario.jsx
│   │   ├── Categoria.jsx
│   │   ├── EstadoPedido.jsx
│   │   ├── FiltroCategoria.jsx
│   │   ├── ItemCarrito.jsx
│   │   └── TarjetaProducto.jsx
│   │
│   ├── organisms
│   │   ├── CatalogoProductos.jsx
│   │   ├── Footer.jsx
│   │   ├── FormularioContacto.jsx
│   │   ├── FormularioLogin.jsx
│   │   ├── FormularioRegistro.jsx
│   │   ├── Navbar.jsx
│   │   ├── ResumenCarrito.jsx
│   │   └── SeccionCategoria.jsx
│   │
│   └── templates
│       └── PlantillaPublica.jsx
│       
│
├── pages
│   ├── AccesoDenegado.jsx
│   ├── AdminUsuarios.jsx
│   ├── AgregarProducto.jsx
│   ├── Carrito.jsx
│   ├── Catalogo.jsx
│   ├── Contactanos.jsx
│   ├── CrearCuenta.jsx
│   ├── Detalles.jsx
│   ├── EditarProducto.jsx
│   ├── Inicio.jsx
│   ├── Login.jsx
│   ├── noEncontrado.jsx
│   ├── Pago.jsx
│   ├── Pedidos.jsx
│   └── Resultado.jsx
│
├── rutas
│   ├── RutaProtegida.jsx
│   └── VerificarSesion.jsx
│
├── services
│   ├── api.js
│   └── sesion.js
│
├── data
│   ├── productos.json
│   └── usuarios.json
│
├── tests
│   ├── Boton.test.jsx
│   ├── BotonClick.test.jsx
│   ├── Input.test.jsx
│   ├── NavbarConUsuario.test.jsx
│   ├── NavbarSinUsuario.test.jsx
│   ├── PruebaMala.test.jsx
│   ├── Resultado.test.jsx
│   ├── ResumenCarrito.test.jsx
│   ├── TarjetaProductoAgotado.test.jsx
│   ├── TarjetaProductoNombre.test.jsx
│   └── TarjetaProductoPrecio.test.jsx
│
├── App.jsx
├── App.css
├── main.jsx
└── setupTests.js
```

## Tecnologías
- React
- Vite
- React Router DOM
- React Bootstrap
- Bootstrap
- Vitest
- Testing Library
- JavaScript
- HTML5
- CSS3
- Git y GitHub

## Funcionalidades Implementadas
### Cliente
- Registrarse
- Iniciar sesión
- ver el catálogo de productos
- ver las Categorías
- ver Detalle del producto
- ver Carrito de sus compras
- Confirmar su compra (se crea el pedido en la API y se descuenta el stock)
- ver resultado de su compra
- ver sus pedidos, su detalle y cancelarlos mientras estén pendientes
  
### Administrador
- Crear productos
- Leer productos
- Actualizar productos
- Eliminar productos
- Gestionar usuarios: listar, crear, editar, cambiar rol, desactivar y reactivar
- Ver todos los pedidos y cambiar su estado

### Vendedor
- Ver todos los pedidos y cambiar su estado (pendiente, pagado, enviado, entregado o cancelado)


## Instalación
Clonar el repositorio:
git clone https://github.com/Fabi-Hodi/sonidoVivoV2.git
Entrar al proyecto:
cd sonidoVivoV2
Instalar dependencias:
npm install


## Pruebas Unitarias

Ejecutar Vitest:
npm run test

Ejecutar pruebas una sola vez:
npm run test:run
Las pruebas verifican:
Botón
Input
Navbar
TarjetaProducto
ResumenCarrito
Resultado


## Cómo ejecutar el proyecto
npm install
npm run dev

## Material complementario
https://drive.google.com/drive/folders/1vgA0f8f0bYEU_cqbdvunBZYgfk0wdNyZ?usp=drive_link


## Backend
- Repositorio: https://github.com/Fabi-Hodi/sonidovivo-backend
- API REST en Spring Boot, desplegada en EC2, con PostgreSQL en Amazon RDS.
- Swagger: http://52.73.234.170:8080/swagger-ui.html

## Conexión con la API
Crear un archivo `.env.local` en la raíz del proyecto (no se sube a GitHub), con la IP del backend:

```
VITE_API_URL=http://IP_DEL_BACKEND:8080/api/v1
```

Las llamadas a la API están en `src/services/api.js` y usan axios. El token se agrega a cada petición con un interceptor, y si la API responde 401 se cierra la sesión.
La sesión (token y usuario) se guarda en `localStorage` mediante `src/services/sesion.js`.

- **Crear cuenta** (`POST /auth/register`): muestra "Creando cuenta..." mientras espera, un mensaje de exito y los errores que devuelve el servidor (datos invalidos o correo repetido).
- **Iniciar sesion** (`POST /auth/login`): muestra "Ingresando...", guarda el token y los datos del usuario y muestra un error si el correo o la contraseña son incorrectos.
- **Cerrar sesion**: borra el token y los datos del usuario del navegador.
- **Catálogo** (`GET /productos`, `GET /productos/codigo/{codigo}`): los productos, su precio y su stock vienen de la base de datos.
- **Agregar, editar y eliminar productos** (`POST`, `PUT` y `DELETE /productos`): solo Administrador.
- **Pago** (`POST /pedidos`): envía los productos del carrito, el tipo de entrega y solo los 4 últimos dígitos de la tarjeta. Si un producto no tiene stock suficiente, el backend responde 409 y se muestra el mensaje.
- **Pedidos** (`GET /pedidos`, `GET /pedidos/{id}`, `PATCH /pedidos/{id}/estado`, `PATCH /pedidos/{id}/cancelar`): el cliente ve y cancela sus pedidos; Administrador y Vendedor ven todos y cambian el estado.

## Estado de la integración

| Funcionalidad | Diseñado | Implementado | Probado |
|---|---|---|---|
| Crear cuenta con la API | Sí | Sí | Sí (21-11-2026) |
| Iniciar sesión con la API | Sí | Sí | Sí (21-11-2026) |
| Cerrar sesión (borra el token) | Sí | Sí | Sí (21-11-2026) |
| Sesión que se mantiene al recargar (`/auth/me`) | Sí | Sí | Sí (25-11-2026) |
| Rutas protegidas por sesión y por rol | Sí | Sí | Sí (25-11-2026) |
| Conexión con la API usando axios | Sí | Sí | Sí (27-11-2026) |
| Gestión de usuarios (administrador) | Sí | Sí | Sí (28-11-2026) |
| Catálogo desde la API | Sí | Sí | No |
| Agregar, editar y eliminar productos con la API | Sí | Sí | No |
| Compra que crea el pedido en la API (regla de stock) | Sí | Sí | No |
| Mis pedidos y gestión de pedidos (Administrador y Vendedor) | Sí | Sí | No |
