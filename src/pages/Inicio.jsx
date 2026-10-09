import { PlantillaPublica } from "../components/templates/PlantillaPublica";


function Inicio(props){
    return(
        <PlantillaPublica>
            <section class="banner">
           
                <div className="container mt-5">
                    <h1 class="text-banner">Tu sonido, <br/>
                        tu mundo.</h1>
                    <p class="text-banner">Encuentra el instrumento perfecto para expresar quien eres.</p>
                </div>
            </section>
        </PlantillaPublica>
    );
}

export default Inicio;





