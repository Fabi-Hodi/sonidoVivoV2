import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Catalogo from "./pages/Catalogo";
import CrearCuenta from "./pages/CrearCuenta";
import Carrito from "./pages/Carrito";
import Contactanos from "./pages/Contactanos";
import Detalles from './pages/Detalles';
import Pago from './pages/Pago';
import Resultado from './pages/Resultado';
import AgregarProducto from "./pages/AgregarProducto";

import NoEncontrado from "./pages/noEncontrado";
import { CartProvider } from "./context/CartContext";





function App() {
    return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/crearCuenta" element={<CrearCuenta />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/detalles/:codigo" element={<Detalles />} />
          <Route path="/noencontrado" element={<NoEncontrado />} />
          <Route path="/pago" element={<Pago />} />
          <Route path="/resultado" element={<Resultado />} />
          <Route path="/agregar-producto" element={<AgregarProducto />} />

          
        </Routes>
      </BrowserRouter>
    </CartProvider>
    );

}

export default App;