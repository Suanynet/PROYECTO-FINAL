import React from 'react';
import "../Styles/Footer.css";
import logo1 from "../Img/LogoF.png"
import logo2 from "../Img/LogoC.png"
import logo3 from "../Img/LogoU.png"
import logo4 from "../Img/Horarios.png"

function Footer() {
  return (
    <div>
      <footer>
        <div className='contactos'>
          <h1>Contáctenos</h1>
          <div className='medios'>
            <div className='display'>
             <img className='icono' src={logo1} alt="" />
             <h2>Facebook</h2>
            </div>
            <h3>https://www.facebook.com/profile.php?id=100075064784044&mibextid=ZbWKwL</h3>
            <br />
            <br />
            <div className='display'>
             <img className='icono' src={logo2} alt="" />
             <h2>Email</h2> 
            </div>
            <h3>montielsusan79@gmail.com</h3>
          </div>
        </div>

        <div className='horarios'>
          <h1>Nuestros Horarios</h1>
          <div className='semana'>
            <div className='display'>
             <img className='icono' src={logo4} alt="" />
             <p>Lunes: 9:00 A.M - 6:00 P.M</p>
            </div> 
            <div className='display'>
             <img className='icono' src={logo4} alt="" />
             <p>Martes: 9:00 A.M - 6:00 P.M</p>
            </div>
            <div className='display'>
             <img className='icono' src={logo4} alt="" />
             <p>Miercoles: 9:00 A.M - 6:00 P.M</p>
            </div>
            <div className='display'>
             <img className='icono' src={logo4} alt="" />
             <p>Jueves: 9:00 A.M - 6:00 P.M</p>
            </div>
            <div className='display'>
             <img className='icono' src={logo4} alt="" />
             <p>Viernes: 9:00 A.M - 6:00 P.M</p>
            </div>
            <div className='display'>
             <img className='icono' src={logo4} alt="" />
             <p>Sabado: 9:00 A.M - 6:00 P.M</p>
            </div>
            <div className='display'>
             <img className='icono' src={logo4} alt="" />
             <p>Domingo: 9:00 A.M - 6:00 P.M</p>
            </div>
          </div>
        </div>

        <div className='ubicacion'>
           <h1>Ubicación</h1>
          <br />
          <div className='display'>
           <img className='iconoU' src={logo3} alt="" />
           <p>Nos ubicamos en NOSARA <br /> por la calle del EBAIS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
