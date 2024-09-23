import React, { useState, useEffect } from "react"
import getProductos from "../Service/GetProductos"
import "../Styles/FormProducts.css"


function FormProducts() {

  const [datosProductos, setProductos] = useState([]);



  useEffect(() => {
    const fetchProductos = async () => {
      const data = await getProductos();
     
   setProductos(data);
     
  };
    fetchProductos();
  }, []);



  return (
    <div>
      <h1 className="Bebidas">Bebidas Disponibles</h1>
      <br />
      <br />
        <div>
        <ul className="columnas">
            {datosProductos.map((productos) => (
             <li className="cartas" key={productos.id}>
               {productos.Name} <br />
               {productos.Price} <br />
               <br />
               <img className='imagenes' src={productos.Image} />
             </li>
            ))}
          </ul>
       

        

      
      </div>
    </div>
  )
}

export default FormProducts