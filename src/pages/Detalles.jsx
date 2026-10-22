import { useParams } from 'react-router-dom';

function Detalles(){

    const { nombre } = useParams(); 

    return(
        <div>
            <h1>{nombre}</h1>
        </div>
    );
}

export default Detalles;