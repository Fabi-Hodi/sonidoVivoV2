import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ResumenCarrito(props) {
    return (
        <Card className="bg-dark text-white border-secondary p-4">
            <Card.Title className="mb-4 text-center fs-4">Resumen de la compra</Card.Title>
            
            <div className="d-flex justify-content-between mb-3">
                <span>Subtotal:</span>
                <span>${props.total}</span>
            </div>
            
            <hr className="border-secondary" />
            
            <div className="d-flex justify-content-between mb-4 fw-bold fs-5 text-warning">
                <span>Total a pagar:</span>
                <span>${props.total}</span>
            </div>
            
            <Button variant="warning" className="w-100 fw-bold text-dark fs-5">
                Proceder al pago
            </Button>
        </Card>
    );
}

export default ResumenCarrito;