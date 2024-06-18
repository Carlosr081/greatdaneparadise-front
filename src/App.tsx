import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './index.css'
import Admin from './components/Admin';
import Banner from './components/Banner';
import Slider from './components/Slider'; // Importa el componente Slider
import Login from './components/Login';
import Photos from './components/Photos';
import Videos from './components/Videos';
import logo from './assets/logo.jpg';
import AboutUs from './components/Aboutus'; // Importa el componente AboutUs
import OurServices from './components/Ourservices'
import ContactUs from './components/Contactus';
import Copyright from './components/Copyright'

const App: React.FC = () => {
  // Estado para verificar si el usuario está autenticado
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Función para manejar el inicio de sesión exitoso
  const handleLogin = () => {
    // Establecer isLoggedIn en true cuando el usuario inicia sesión correctamente
    setIsLoggedIn(true);
  };

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    // Establecer isLoggedIn en false cuando el usuario cierra sesión
    setIsLoggedIn(false);
  };

  return (
    <Routes>
      {/* Ruta principal */}
      <Route
        path="/"
        element={
          <div>
            <Banner logo={logo} />
            <hr />
            <Slider />
            <AboutUs /> 
            <OurServices/>
            <ContactUs/>
            <Copyright/>
          </div>
        }
      />
      {/* Rutas protegidas */}
      <Route
        path="/admin"
        element={
          isLoggedIn ? (
            <Admin onLogout={handleLogout} /> // Pasar la función onLogout al componente Admin
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="/videos" element={<Videos />} />
    </Routes>
  );
};

export default App;
