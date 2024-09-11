import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Administracion from "../Pages/Administracion";
import ProtectedRoute from '../ProtectedRoute';
import Products from '../Pages/Products';
import Home from '../Pages/Home'

const Routing = () => {
    return (
       <Router>
         <Routes>
            <Route path= '/Register' element={<Register />} />
            <Route path= '/Login' element={<Login />} />
            <Route path= '/Administracion' element={<ProtectedRoute><Administracion /></ProtectedRoute>} />
            <Route path= '/Products' element={<Products />} />
            <Route path= '/Home' element={<Home />} />
         </Routes>
       </Router>
    )
} 

export default Routing