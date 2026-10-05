function ContadorCantidad(props) {
  return (
    
      <input type="number" className="form-control" 
      style={{ width: '80px' }} 
      defaultValue={props.cantidad || 1} 
      />
    
  );
}

export default ContadorCantidad;