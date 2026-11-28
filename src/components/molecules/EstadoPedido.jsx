import Badge from 'react-bootstrap/Badge';

// muestra el estado de un pedido con un color segun el estado
const COLORES = {
    PENDIENTE: 'warning',
    PAGADO: 'info',
    ENVIADO: 'primary',
    ENTREGADO: 'success',
    CANCELADO: 'secondary',
};

function EstadoPedido(props) {
    return (
        <Badge bg={COLORES[props.estado] || 'secondary'} text={props.estado === 'PENDIENTE' ? 'dark' : undefined}>
            {props.estado}
        </Badge>
    );
}

export default EstadoPedido;
