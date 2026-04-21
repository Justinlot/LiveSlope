import React from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import AuthProvider from './components/auth-provider';
import About from './pages/about';
import Privacy from './pages/privacy';
import Imprint from './pages/imprint';

/**
 * Root application component that wires authentication and routing.
 */
export default function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/imprint" element={<Imprint />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
