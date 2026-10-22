import { createContext, useState } from "react";

//se crea el contexto como una "nube"
export const CartContext = createContext();

//creamos el proveedor (lo que controla la nube)
export function CartProvider(props) {

    //aqui guardamos la lista de productos. empieza como un arreglo vacío []
    const [carrito, setCarrito] = useState([]);

    //esta funcion recibe un producto y lo suma a lo que ya habia en el carro
    const agregarAlCarrito = (producto, cantidadSeleccionada) => {
    const index = carrito.findIndex((p) => p.nombre === producto.nombre);

    if (index !== -1) {
        const nuevoCarrito = [...carrito];
        nuevoCarrito[index].cantidad += cantidadSeleccionada;
        setCarrito(nuevoCarrito);
    } else {
        setCarrito([...carrito, { ...producto, cantidad: cantidadSeleccionada }]);
    }
};

    //actualiza la suma/resta sin bajar de 1
    const actualizarCantidad = (id, nuevaCantidad) => {
        if (nuevaCantidad < 1) return;
        setCarrito(carrito.map(producto => 
            producto.id === id ? { ...producto, cantidad: nuevaCantidad } : producto
        ));
    };

    // borra el producto filtrando su ID
    const eliminarProducto = (id) => {
        setCarrito(carrito.filter(producto => producto.id !== id));
    };

    return (
        //exportamos las nuevas funciones en el value
        <CartContext.Provider value={{ carrito, agregarAlCarrito, actualizarCantidad, eliminarProducto }}>
            {props.children}
        </CartContext.Provider>
    );

}