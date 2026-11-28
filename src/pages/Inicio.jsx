import { PlantillaPublica } from "../components/templates/PlantillaPublica";
import Separador from "../components/atoms/Separador";
import SeccionCategoria from "../components/organisms/SeccionCategoria";

function Inicio(){
    return(
        <PlantillaPublica>
            <section className="banner">
           
                <div className="container mt-5">
                    <h1 className="text-banner">Tu sonido, <br/>
                        tu mundo.</h1>
                    <p className="text-banner">Encuentra el instrumento perfecto para expresar quien eres.</p>
                </div>
            </section>
            <Separador/>

            <SeccionCategoria/>
        </PlantillaPublica>
    );
}

export default Inicio;





