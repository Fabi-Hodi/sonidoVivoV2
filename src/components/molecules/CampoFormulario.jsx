import CampoTexto from "../atoms/CampoTexto";

function CampoFormulario(props){
    return(
        <div className="mb-3">
            <label className="form-label">{props.titulo}</label>
            <CampoTexto placeholder = {props.placeholder} />
        </div>
    );
}

export default CampoFormulario;