
import Selector from '../atoms/Selector';
import Boton from '../atoms/Boton';

function FiltroCategoria(props){
    return(

        <div className="d-flex align-items-center gap-3 my-4">
            <h5 className="mb-0">Filtro</h5>

            <Selector
                opciones={props.listaCategorias}
            />

            <Boton
                nombreBoton={props.nombreBoton}
                variante="primary"
            />
        </div>
        

    );
}

export default FiltroCategoria;