import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function TarjetaProducto(props) {
    return (
        <Card className="tarjeta-producto h-100 bg-dark text-white border-secondary shadow">
            
            <div className="contenedor-imagen-catalogo p-3 rounded-top d-flex justify-content-center align-items-center">
                <Card.Img 
                    variant="top" 
                    src={props.imagen} 
                    alt={props.nombre} 
                    className="imagen-catalogo"
                />
            </div>
            
            <Card.Body className="d-flex flex-column">
                <Card.Text className="texto-categoria text-secondary mb-1">
                    {props.categoria}
                </Card.Text>
                
                <Card.Title className="fs-5 mb-3">{props.nombre}</Card.Title>
                
                <Card.Text className="text-warning fw-bold fs-4 mb-2">
                    ${props.valor}
                </Card.Text>
                
                <Card.Text className={props.disponible ? "text-success mb-4" : "text-danger mb-4"}>
                    {props.disponible ? `Stock disponible: ${props.stock}` : "Agotado"}
                </Card.Text>
                
                <Link to={`/detalles/${props.codigo}`} className="mt-auto text-decoration-none">
                    <Button variant="outline-light" className="w-100 fw-bold">
                        Ver Detalles
                    </Button>
                </Link>

                {props.esAdmin && (
                    <Link
                        to={`/editar-producto/${props.codigo}`}
                        className="text-decoration-none"
                    >
                        <Button
                            variant="primary"
                            className="w-100 mt-2 fw-bold"
                        >
                            Editar
                        </Button>
                    </Link>
                )}

                {props.esAdmin && (
                    <Button
                        variant="danger"
                        className="w-100 mt-2 fw-bold"
                        onClick={props.onEliminar}
                    >
                        Eliminar
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default TarjetaProducto;