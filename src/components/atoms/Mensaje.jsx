// muestra un mensaje de exito (verde) o de error (rojo)
// tipo: "exito" o "error"
function Mensaje(props) {
    if (!props.texto) {
        return null;
    }
    const clase = props.tipo === "exito" ? "alert alert-success" : "alert alert-danger";
    return (
        <div className={clase} role="alert">
            {props.texto}
        </div>
    );
}

export default Mensaje;
