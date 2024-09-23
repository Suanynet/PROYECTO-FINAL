import React, { useState, useEffect } from 'react';
import "../Styles/FormAdministracion.css"
import GetProductos from '../Service/GetProductos' 
import PostProductos from '../Service/PostProductos';
import UpdateProductos from '../Service/UpdateProductos';
import DeleteProductos from '../Service/DeleteProductos';
import { useNavigate } from 'react-router-dom';



function FormAdministracion() {
 
  const [Name, setName] = useState('');
  const [Price, setPrice] = useState('');
  const [Image, setImage]= useState('');
  const [dataService,setData]= useState([]);
  const [edicionProducto, setvalorProducto] = useState('');
  const [edicionPrecio, setvalorPrecio] = useState('');

    

  useEffect(() => {
    const fetchProductos = async () => {
      const data = await GetProductos();
     
   setData(data);
     
  };
    fetchProductos();
  }, []);


  
  function cargarName(event) {
    setName(event.target.value)
  }

  function cargarPrice(event) {
    setPrice(event.target.value)
  }

  function ImageLoad(event) {

    const img = event.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); 
    };

    reader.readAsDataURL(img);

  } 

  const cargar = () => {
    console.log(Image);
  PostProductos (Image,Name, Price)
  
   }

   function cargarEdit(event) {
    setName(event.target.value)
   }

   const BntClick = () => {
    BntEditar(true);
  }

  const InputChange = (event) => {
    Input(event.target.value);
  }

  function cargarEdit(e) {
          

    setvalorProducto(e.target.value)



  }
  
  function cargarEditPrecio(e) {
          
 
    setvalorPrecio(e.target.value)


  }

   function cargarEliminar(id) {
    DeleteProductos(id)
  }

  function guardarEdicion(id) {

   
    
    console.log(Image);

    UpdateProductos(edicionProducto,edicionPrecio, Image, id)
    
    
  }

  const navigate = useNavigate();

  const cargaCerrar = () => {
    localStorage.clear();
    navigate("/Login")
  }



  return (

    <div className='bajar'>
      <div className='productosx'>
      <button className='cerrar' onClick={cargaCerrar}>Cerrar Sesion</button>
     <h2>Agregar Productos</h2>
     <br />
     <label htmlFor="nameP">Nombre Producto</label>
      <input type="text" placeholder='Ingrese el nombre' value={Name} onChange={cargarName}/>
      <br />
      <label htmlFor='cash'>Precio Productos</label>
      <input type="text" placeholder='Ingrese el precio' value={Price} onChange={cargarPrice}/>
      <br />
      <label htmlFor="image">Imagen Producto</label>
      <input type="file" onChange={ImageLoad} />
      <br />
      <br />
      <button className='btnMover' onClick={cargar}>Agregar</button>

      <br />
          <div className='productoscontainer'>
           <ul>
             {dataService.map((productos) => (
             <li key={productos.id}>
               {productos.Name} <br />
               {productos.Price} <br />
               <img className='imagenes' src={productos.Image} alt="" />
               <br />
              
               <input className='contro1' type="text" placeholder="Ingrese la edición del producto" onChange={cargarEdit}/>
               <input className='control1' type="text" placeholder='Ingrese la edicion del precio' onChange={cargarEditPrecio}/>
               <label htmlFor="image">Imagen Edición</label>
               <input className='control1' type="file" onChange={ImageLoad} />
               <br />
               <br />
               <button className='btnMover' onClick={e => guardarEdicion(productos.id)}>Guardar</button>
               <button className='btnMover' onClick={e => cargarEliminar(productos.id)}>Eliminar</button>
               <br />
               <br />
             </li>
             ))}
           </ul>
          </div>
   </div>
  </div>
   
  )
}

export default FormAdministracion