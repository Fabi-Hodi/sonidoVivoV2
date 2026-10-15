import { PlantillaPublica } from "../components/templates/PlantillaPublica";
import Boton from "../components/atoms/Boton";

function Carrito(props){

    return(

        <PlantillaPublica>
            <div>
                <Boton
                   nombreBoton="prueba boton"
                />
            </div>
            
        </PlantillaPublica>
    );

}

export default Carrito;