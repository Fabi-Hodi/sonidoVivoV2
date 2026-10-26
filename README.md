
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
src
│
├── components
│   │
│   ├── atoms
│   │   ├── Boton.jsx
│   │   ├── CampoTexto.jsx
│   │   ├── ContadorCantidad.jsx
│   │   ├── EtiquetaStock.jsx
│   │   ├── Input.jsx
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
│   └── Resultado.jsx
│
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
|   |── PruebaMala.test.jsx
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
##Cliente
- Registrarse
- Iniciar de sesión
- ver el catálogo de productos
- ver las Categorías
- ver Detalle del producto
- ver Carrito de sus compras
- Confirmar su compra
- ver resultado de su compra
  
##Administrador
- Crear productos
- Leer productos
- Actualizar productos
- Eliminar productos


##Instalación
Clonar el repositorio:
git clone URL_DEL_REPOSITORIO
Entrar al proyecto:
cd sonidoVivoV2
Instalar dependencias:
npm install


##Pruebas Unitarias

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
