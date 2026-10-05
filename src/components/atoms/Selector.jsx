function Selector(props){
    return(
        <select className="form-select">
            <option value="">Selectione una opción...</option>

            {props.opciones.map((item, index)=>
                <option key = {index} value={item}></option>
            )}


        </select>

    );
}

export default Selector;