import { useNavigate } from 'react-router-dom'
import  NavBar  from '../organisms/Navbar'
import  Footer  from '../organisms/Footer'


export function PlantillaPublica(props) {
  // useNavigate entrega la función navigate: navigate('/catalogo') cambia de página.
  const navigate = useNavigate()

  return (
    <>
      <NavBar
        onNavegar={navigate}
        onBuscar={(texto) => navigate(`/buscar/${encodeURIComponent(texto)}`)}
      />
      <main className="contenido">
        {props.children}
      </main>
      <Footer onNavegar={navigate} />
    </>
  )
}