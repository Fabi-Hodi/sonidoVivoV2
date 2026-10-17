import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { BsTrash } from "react-icons/bs";

function ItemCarrito(props) {
    return (
        <Card className="mb-3 bg-dark text-white border-secondary">
            <Row className="g-0 align-items-center">
                
                <Col md={3} className="p-2">
                    <Card.Img src={props.imagen} alt={props.nombre} className="img-fluid rounded" />
                </Col>
                
                
                <Col md={5}>
                    <Card.Body>
                        <Card.Title>{props.nombre}</Card.Title>
                        <Card.Text className="text-warning fw-bold">
                            ${props.precio}
                        </Card.Text>
                    </Card.Body>
                </Col>
                
               
                <Col md={4} className="text-center">
                    <div className="d-flex justify-content-center align-items-center gap-2">
                        <Button variant="outline-light" size="sm">-</Button>

                        <span>1</span>

                        <Button variant="outline-light" size="sm">+</Button>
                        
                        <Button variant="outline-danger" size="sm" className="ms-3 d-flex align-items-center justify-content-center">
                            <BsTrash size={18} /> 
                        </Button>
                    </div>
                </Col>
            </Row>
        </Card>
    );
}

export default ItemCarrito;