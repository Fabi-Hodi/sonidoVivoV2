import Categoria from "../molecules/Categoria";


function SeccionCategoria(){
    return(

        <section>

            <div className="container mt-5">
                <div className="d-flex justify-content-center gap-4">
                    <Categoria 

                        imagen='/src/assets/guitarra.png'  
                        nombreCategoria = "Guitarras"
                    
                    />
                

            
                    <Categoria 
                        
                        imagen='/src/assets/guitarraElectrica.png'
                        nombreCategoria = "Guitarras Electricas"
                    
                    />
            

                
                    <Categoria 
                        
                        imagen='/src/assets/bajo.png'
                        nombreCategoria = "Bajos"
                    
                    />
                

                
                    <Categoria 
                        
                        imagen='/src/assets/bateria.png'
                        nombreCategoria = "Baterias"
                    
                    />
                

                
                    <Categoria 
                        
                        imagen='/src/assets/piano.png'
                        nombreCategoria = "Pianos y Teclados"
                    
                    />
                

            
                    <Categoria 

                        imagen='/src/assets/microfono.png'  
                        nombreCategoria = "Micrófonos"
                    
                    />
                

                
                    <Categoria 
                        
                        imagen='/src/assets/estudioGrabacion.png'
                        nombreCategoria = "Estudio y Grabación"
                    
                    />
                
                
                    <Categoria 
                        
                        imagen='/src/assets/accesorios.png'
                        nombreCategoria = "Accesorios"
                    
                    />
                

                
                    <Categoria 
                        
                        imagen='/src/assets/amplificador.png'
                        nombreCategoria = "Amplificadores"
                    
                    />
                

                
                    <Categoria 
                        
                        imagen='/src/assets/pedalesEfecto.png'
                        nombreCategoria = "Pedales de Efecto"
                    
                    />
                </div>

            </div>


        </section>
    );
}

export default SeccionCategoria;