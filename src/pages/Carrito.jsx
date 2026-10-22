// 1. Importamos useContext y tu CartContext
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

import { PlantillaPublica } from "../components/templates/PlantillaPublica";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import ItemCarrito from "../components/molecules/ItemCarrito";
import ResumenCarrito from "../components/organisms/ResumenCarrito";

function Carrito(props){
    //nos conectamos al context y bajamos la lista de productos
    const { carrito } = useContext(CartContext);

    //calculamos el total para enviarlo al resumen
    const totalPagar = carrito.reduce((suma, producto) => suma + (producto.precio * producto.cantidad), 0);

    return(
        <PlantillaPublica>
            <Container className="my-5"> 
                <h1 className="text-center mb-5 text-white">Tu Carrito de Compras</h1>

                <Row className="justify-content-center gap-4"> 
                    
                    <Col md={7} className="bg-dark border border-secondary rounded p-4">
                        <h4 className="text-white mb-4">Productos Agregados</h4>
                        
                        {/*dibujamos cada producto del carrito */}
                        {carrito.length === 0 ? (
                            <p className="text-white">Tu carrito está vacío.</p>
                        ) : (
                            carrito.map((producto) => (
                                <ItemCarrito 
                                    key={producto.id}
                                    id={producto.id}
                                    nombre={producto.nombre}
                                    precio={producto.precio}
                                    imagen={producto.imagen}
                                    cantidad={producto.cantidad}
                                />
                            ))
                        )}
                        
                        <hr className="border-secondary mt-4" />
                        <div className="mt-3">
                            <Link to="/catalogo" className="text-warning text-decoration-none fw-bold">
                                ← Descubre más productos
                            </Link>
                        </div>
                    </Col>                

                    <Col md={4}>
                        {/*mostramos el total calculado en el cuadro resumen */}
                        <ResumenCarrito total={totalPagar} />
                    </Col>
                    
                </Row>
            </Container>
        </PlantillaPublica>
    );
}

export default Carrito;