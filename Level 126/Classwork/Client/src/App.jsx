import React, { useState } from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';

const API_URL = "http://localhost:3000/root/auth"

export default function App () {

  return (
    <>
      <h1>Full Stack CRUD</h1>
      <Navbar />

      <Routes>
        <Route path={'/profile'} element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/login'} element={<Login />} />
      </Routes>
    </>
  )
}