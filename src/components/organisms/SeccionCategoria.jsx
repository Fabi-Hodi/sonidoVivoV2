import Categoria from "../molecules/Categoria";


function SeccionCategoria() {
    return (
        <section id="section-categoria">
            
            <Categoria 
                imagen='/src/assets/guitarra.png'  
                nombreCategoria="Guitarras"
                categoria="Guitarras Acústicas"
            />
            
            <Categoria 
                imagen='/src/assets/guitarraElectrica.png'
                nombreCategoria="Guitarras Eléctricas"
                categoria="Guitarras Eléctricas"
            />
            
            <Categoria 
                imagen='/src/assets/bajo.png'
                nombreCategoria="Bajos"
                categoria="Bajos Eléctricos"
            />
            
            <Categoria 
                imagen='/src/assets/bateria.png'
                nombreCategoria="Baterías"
                categoria="Baterías"
            />
            
            <Categoria 
                imagen='/src/assets/piano.png'
                nombreCategoria="Pianos y Teclados"
                categoria="Teclados y Pianos"
            />
            
            <Categoria 
                imagen='/src/assets/microfono.png'  
                nombreCategoria="Micrófonos"
                categoria="Micrófonos"
            />
            
            <Categoria 
                imagen='/src/assets/estudioGrabacion.png'
                nombreCategoria="Estudio y Grabación"
                categoria="Estudio y Grabación"
            />
            
            <Categoria 
                imagen='/src/assets/accesorios.png'
                nombreCategoria="Accesorios"
                categoria="Accesorios"
            />
            
            <Categoria 
                imagen='/src/assets/amplificador.png'
                nombreCategoria="Amplificadores"
                categoria="Amplificadores"
            />
            
            <Categoria 
                imagen='/src/assets/pedalesEfecto.png'
                nombreCategoria="Pedales de Efecto"
                categoria="Pedales de Efectos"
            />

        </section>
    );
}

export default SeccionCategoria;