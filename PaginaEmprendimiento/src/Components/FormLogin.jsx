import React, { useState, useEffect } from "react";
import "../Styles/FormLogin.css"
import { useNavigate } from "react-router-dom";
import GetUsers from "../Service/GetUsers";
import { Link } from "react-router-dom";

function FormLogin() {

  const [gmail, setGmail] = useState ('');
  const [pass, setPass] = useState('');
  const [saludo, setSaludo] = useState('');
  const navigate = useNavigate();

  function cargarGmail(event) {
    setGmail(event.target.value);
  }

  function cargarPass(event) {
    setPass(event.target.value)
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await GetUsers();
     
      
      setUsers(data);
 
    };
    fetchUsers();
  }, []);




  function cargarGmail(event) {
    setGmail(event.target.value);
  }

  function cargarPass(event) {
    setPass(event.target.value)
  }


  const cargar = () => {

    const listaU = users.find(Users => Users.gmail === gmail && Users.pass === pass )

    if (listaU) {
      navigate("/Home");
    }else{
      setSaludo("Datos no encontrados")
    }

  }
  
    return (
        <div>
          <div className="inicio">
            <h1>INICIO SESION</h1>

            <label htmlFor="gmail"><h2>CORREO ELECTRONICO</h2></label>
            <input type="text" placeholder="Ingrese su Correo" value={gmail} onChange={cargarGmail}/>
            <br />
            <br />
            <label htmlFor="pass"><h2>CONTRASEÑA</h2></label>
            <input type="text" placeholder="Ingrese su Contraseña" value={pass} onChange={cargarPass}/>
            <br />
            <br />
            <button className="boton iniciar" onClick={cargar}>INGRESAR</button>
            <br />
            <p><Link to = "/Register">¿No tienes cuenta? Registrate aquí</Link></p>
            <p>{saludo}</p>
          </div>
        </div>
    )
}

export default FormLogin