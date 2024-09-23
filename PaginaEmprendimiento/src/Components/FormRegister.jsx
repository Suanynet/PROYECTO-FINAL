import React, { useState, useEffect } from "react";
import "../Styles/FormRegister.css";
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import PostUsers from "../Service/PostUsers";
import GetUsers from "../Service/GetUsers";
import DeleteUsers from "../Service/DeleteUsers"



function FormRegister() {
  const [username, setUsername] = useState('');
  const [gmail, setGmail] = useState('');
  const [pass, setPass] = useState('');
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchUsers = async () => {
      const data = await GetUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const UsernameChange = (event) => setUsername(event.target.value);
  const GmailChange = (event) => setGmail(event.target.value);
  const PassChange = (event) => setPass(event.target.value);

  const Register = () => {
    
    const CreateU = users.find(user => user.gmail === gmail && user.pass === pass);
    if (CreateU) {
      PostUsers(username, gmail, pass);
    }else{
      Swal.fire({
        title: 'Usuario resgistrado correctamente',
        text: '¡¡Bienvenido!!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
    }
    
    
    if (username === "" || gmail === "" || pass === "") {
      Swal.fire({
        title: 'Error',
        text: 'Todos los campos son requeridos',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return;
    }

    const existingUser = users.find(user => user.gmail === gmail);
    if (!existingUser) {
      PostUsers(username, gmail, pass);
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Este correo ya esta en uso',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }

   
  };

  function eliminarUser(id) {
    DeleteUsers(id)
  }

  return (
    <div className="formcontainer">
      <div className="formcard">
        <h1>REGISTRO DE NUEVOS ADMINISTRADORES</h1>
        <br />
        <label htmlFor="username"><h2>NOMBRE DE USUARIO</h2></label>
        <input type="text" placeholder="Ingrese su Nombre" value={username} onChange={UsernameChange} />
        
        <label htmlFor="gmail"><h2>CORREO ELECTRONICO</h2></label>
        <input type="text" placeholder="Ingrese su Correo" value={gmail} onChange={GmailChange} />
        
        <label htmlFor="pass"><h2>CONTRASEÑA</h2></label>
        <input type="text" placeholder="Ingrese su Contraseña" value={pass} onChange={PassChange} />
        
        <button onClick={Register} className="submitbutton">REGISTRARSE</button>
      </div>
      <br />
      <br />

      <div className='registroañadir'>
           <ul>
             {users.map((users) => (
             <li key={users.id}>
               {users.username} <br />
               {users.gmail} <br />
               {users.pass} <br />
               <button className='submitbutton' onClick={e => eliminarUser(users.id)}>Eliminar</button>
               <br />
               <br />
             </li>
             ))}
           </ul>
          </div>
    </div>
  );
}

export default FormRegister;
