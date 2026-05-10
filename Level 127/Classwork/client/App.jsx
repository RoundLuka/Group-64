import React, { useState } from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Feed from './pages/Feed';


const API_URL = "http://localhost:3000/root/auth"

export default function App () {

  return (
    <>
      <h1>Full Stack CRUD</h1>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path='/feed' element={<ProtectedRoute><Feed /></ProtectedRoute>} />
      </Routes>
    </>
  )
}