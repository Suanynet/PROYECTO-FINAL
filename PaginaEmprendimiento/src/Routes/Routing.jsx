import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Administracion from "../Pages/Administracion";
import ProtectedRoute from '../ProtectedRoute';
import Products from '../Pages/Products';
import Home from '../Pages/Home'
import AboutUs from "../Pages/AboutUs";
import Ubication from "../Pages/Ubication"
import Contact from "../Pages/Contact"
import Terminos from "../Pages/Terminos";

const Routing = () => {
    return (
       <Router>
         <Routes>
            <Route path= '/Register' element={<Register />} />
            <Route path= '/Login' element={<Login />} />
            <Route path= '/Administracion' element={ <ProtectedRoute><Administracion /></ProtectedRoute> } />
            <Route path= '/Products' element={<Products />} />
            <Route path= '/' element={<Home />} />
            <Route path= '/AboutUs' element={<AboutUs />} />
            <Route path= '/Ubication' element={<Ubication />} />
            <Route path= '/Contact' element={<Contact />} />
            <Route path= '/Terminos' element={<Terminos />} />
         </Routes>
       </Router>
    )
} 

export default Routing