import Input from '../atoms/Input';

function GrupoFormu(props){

    return(
        <div className='mb-3'>
            <label htmlFor={props.id} className='form-label'>
                {props.textoLabel}
            </label>
            <Input
                id={props.id}
                tipo={props.tipo}
                placeholder={props.placeholder}
                valor={props.valor}
                onChange={props.onChange}
            />
        </div>
    );
}

export default GrupoFormu;