function Boton(props) {
  const variante = props.variante || "primary";
  return (
    <button
      type="submit"
      className={`btn btn-${variante}`}
      onClick={props.onClick}
      disabled={props.deshabilitado}
    >
      {props.nombreBoton}
    </button>
  );
}

export default Boton;
