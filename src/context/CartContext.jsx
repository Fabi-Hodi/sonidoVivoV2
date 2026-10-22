import { createContext, useState } from "react";

//se crea el contexto como una "nube"
export const CartContext = createContext();

//creamos el proveedor (lo que controla la nube)
export function CartProvider(props) {

    //aqui guardamos la lista de productos. empieza como un arreglo vacío [].
    const [carrito, setCarrito] = useState([]);

    //esta función recibe un producto y lo suma a lo que ya habia en el carro
    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    return (
        // Le pasamos la lista (carrito) y la función (agregarAlCarrito) a toda la app
        <CartContext.Provider value={{ carrito, agregarAlCarrito }}>
            {props.children}
        </CartContext.Provider>
    );
}