import React from 'react';
import "../Styles/FormAboutUs.css";

function FormAboutUs() {
  return (
    <div className='info'>
      <div className='card'>
        <h2>¿Quienes somos y cuál es nuestra misión?</h2>
        <p>
          Kombucha Burbujas del Bosque es un emprendimiento apasionado por el arte de la fermentación y la salud natural.
          <br />
          Nos especializamos en la producción de Kombucha, una bebida probiótica tradicionalmente elaborada
          <br />
          a partir de té fermentado. En Burbujas del Bosque, nuestra misión es ofrecer Kombucha de alta calidad que no solo
          <br />
          revitaliza tu cuerpo, sino que también deleita tu paladar con sabores únicos inspirados en la naturaleza.
        </p>
      </div>

      <div className='card'>
        <h2>Visión</h2>
        <p>
          Nuestra visión es ser reconocidos por la Kombucha artesanal, destacándonos por nuestra innovación y autenticidad.
          <br />
          Aspiramos a crear una comunidad global que valore la conexión entre la naturaleza y la salud, inspirando a las personas
          <br />
          a adoptar hábitos más saludables y sostenibles. A través de la expansión de nuestra marca y la mejora continua
          <br />
          de nuestros productos, buscamos impactar positivamente en la vida de nuestros clientes y en el medio ambiente
          <br />
          contribuyendo a un futuro más saludable y sostenible para todos.
        </p>
      </div>
    </div>
  );
}

export default FormAboutUs;
