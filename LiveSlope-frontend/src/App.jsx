import React from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import AuthProvider from './components/auth-provider';

export default function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
