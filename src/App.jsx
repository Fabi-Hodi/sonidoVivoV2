import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Catalogo from "./pages/Catalogo";
import CrearCuenta from "./pages/CrearCuenta";
import Carrito from "./pages/Carrito";
import Contactanos from "./pages/Contactanos";
import Detalles from './pages/Detalles';

import NoEncontrado from "./pages/noEncontrado";





function App() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/crearCuenta" element={<CrearCuenta />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/detalles/:nombre" element={<Detalles />} />
        <Route path="/noencontrado" element={<NoEncontrado />} />

        
      </Routes>
    </BrowserRouter>
    );

}

export default App;