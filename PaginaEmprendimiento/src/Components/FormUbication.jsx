import React from 'react';
import "../Styles/FormUbication.css"

const  FormUbicacion= () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br />
      <br />
      <br /><br />

      
      <iframe
        className='mapa'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5294.530060356699!2d-85.64974754739916!3d9.981059376912082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9e53f826fefcaf%3A0x4a50a366591fc81b!2sTaller%20hernandez!5e1!3m2!1ses-419!2scr!4v1726258675526!5m2!1ses-419!2scr"
        width="600"
        height="450"
        style={{ border: '0', borderRadius: '8px', marginTop: '-900px', backgroundColor: '#8FBE92', padding: '20px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default  FormUbicacion;