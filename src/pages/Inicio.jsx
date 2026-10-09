import { PlantillaPublica } from "../components/templates/PlantillaPublica";
import Separador from "../components/atoms/Separador";

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
        </PlantillaPublica>
    );
}

export default Inicio;





