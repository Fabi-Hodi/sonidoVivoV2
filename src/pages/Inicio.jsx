import { PlantillaPublica } from "../components/templates/PlantillaPublica";
import Separador from "../components/atoms/Separador";
import SeccionCategoria from "../components/organisms/SeccionCategoria";

function Inicio(props){
    return(
        <PlantillaPublica>
            <section className="banner">
           
                <div className="container mt-5">
                    <h1 class="text-banner">Tu sonido, <br/>
                        tu mundo.</h1>
                    <p class="text-banner">Encuentra el instrumento perfecto para expresar quien eres.</p>
                </div>
            </section>
            <Separador/>

            <SeccionCategoria/>
        </PlantillaPublica>
    );
}

export default Inicio;





