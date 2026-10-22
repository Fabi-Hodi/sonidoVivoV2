import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsTrash } from "react-icons/bs"; 
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function ItemCarrito(props) {
    //extraemos las nuevas funciones del context
    const { actualizarCantidad, eliminarProducto } = useContext(CartContext);
    // se calcula el subtotal multiplicando precio por cantidad
    const subtotal = props.precio * props.cantidad;

    return (
        <Card className="mb-3 bg-dark text-white border-secondary">
            <Row className="g-0 align-items-center">
                
                {/*imagen del producto */}
                <Col md={3} className="contenedor-imagen-carrito p-2 text-center bg-white rounded-start d-flex align-items-center justify-content-center">
                    <Card.Img 
                        src={props.imagen} 
                        alt={props.nombre} 
                        className="imagen-carrito"
                    />
                </Col>
                
                {/*titulo y precios */}
                <Col md={5}>
                    <Card.Body>
                        <Card.Title>{props.nombre}</Card.Title>
                        <Card.Text className="text-secondary mb-1">
                            Unidad: ${props.precio}
                        </Card.Text>
                        <Card.Text className="text-warning fw-bold fs-5">
                            Subtotal: ${subtotal}
                        </Card.Text>
                    </Card.Body>
                </Col>
                
                {/*botones de control */}
                <Col md={4} className="text-center">
                    <div className="d-flex justify-content-center align-items-center gap-2">
                        
                        {/* boton restar */}
                        <Button 
                            variant="outline-light" 
                            size="sm" 
                            onClick={() => actualizarCantidad(props.id, props.cantidad - 1)}
                            disabled={props.cantidad <= 1}
                        >
                            -
                        </Button>
                        
                        <span className="fs-5 fw-bold mx-2">{props.cantidad}</span>
                        
                        {/* voton sumar */}
                        <Button 
                            variant="outline-light" 
                            size="sm" 
                            onClick={() => actualizarCantidad(props.id, props.cantidad + 1)}
                        >
                            +
                        </Button>
                        
                        {/* boton eliminar */}
                        <Button 
                            variant="outline-danger" 
                            size="sm" 
                            className="ms-3 border-0 d-flex align-items-center justify-content-center"
                            onClick={() => eliminarProducto(props.id)}
                        >
                            <BsTrash size={18} /> 
                        </Button>
                    </div>
                </Col>
                
            </Row>
        </Card>
    );
}

export default ItemCarrito;