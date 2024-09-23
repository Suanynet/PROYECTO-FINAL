import React, { useState, useEffect } from "react";
import "../Styles/FormLogin.css";
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'
import { useNavigate } from "react-router-dom";
import GetUsers from "../Service/GetUsers";

function FormLogin() {
  const [gmail, setGmail] = useState('');
  const [pass, setPass] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await GetUsers();
      setUsers(data);
    };  
    fetchUsers();
  }, []);

  const handleLogin = () => {
    const listaU = users.find(user => user.gmail === gmail && user.pass === pass);
    if (listaU) {
      Swal.fire({
        title: 'Has ingresado exitosamente',
        text: 'Gracias!!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      localStorage.setItem("Autenticado", true);
      navigate("/Administracion");
    }else{
      if (!gmail || !pass) {
        Swal.fire({
          title: 'Error',
          text: 'Todos los campos son requeridos',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }else{

        if (user => user.gmail !== gmail && user.pass !== pass) {
          Swal.fire({
            title: 'Error',
            text: 'Los datos ingresados son incorrectos',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
          return;
        }

      }
    }
   
  };

  const BLogin = () => {
    navigate("/");
  }

  return (
    <div className="form-container">
      <div className="form-card">
        <h1>INICIO SESION</h1>
        <label htmlFor="gmail"><h2>CORREO ELECTRONICO</h2></label>
        <input className="input2" type="" placeholder="Ingrese su Correo" value={gmail} onChange={(e) => setGmail(e.target.value)} />
        
        <label htmlFor="pass"><h2>CONTRASEÑA</h2></label>
        <input className="input2" type="password" placeholder="Ingrese su Contraseña" value={pass} onChange={(e) => setPass(e.target.value)} />
        <br />
        <br />
        <button className="submit-button" onClick={handleLogin}>INGRESAR</button>
        <button className="submit-button" onClick={BLogin}>VOLVER</button>
      </div>
    </div>
  );
}

export default FormLogin;
