import { PlantillaPublica } from "../components/templates/PlantillaPublica";

function NoEncontrado(){
    return(
        <PlantillaPublica>
            <section className="no-banner">
           
                <div className="container mt-5">
                    <h1 class="text-banner">¡UPS!, <br/>
                        No hay nada por aquí.</h1>
                </div>
            </section>

        </PlantillaPublica>
    );
}

export default NoEncontrado;