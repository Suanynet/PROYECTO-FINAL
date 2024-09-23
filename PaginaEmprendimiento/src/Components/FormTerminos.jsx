import React from 'react'
import "../Styles/FormTerminos.css"

function FormTerminos() {
  return (
    <div>
        <div className='Terms'>
          <br />
          <br />
          <h1 className='title'>TERMINOS Y CONDICIONES</h1>
          <br />
          <p className='subtitle'>Última actualización: [23-09-2024]</p>
          <br />
          <br />
          <br />
          <br />
          <div className='cards'>
           <h2 className='info'>1. Aceptación de los Términos</h2>
           <p className='write'>Al acceder y utilizar el sitio web de Kombucha Burbujas del Bosque,
            usted acepta cumplir con estos Términos y Condiciones. Si no está de acuerdo con 
            alguna parte de estos términos, no debe utilizar el sitio.</p>
          </div>
          <br />
          <div className='cards'>
           <h2 className='info'>2. Uso del Sitio</h2>
           <p className='write'>Este sitio está destinado a la venta y promoción de productos de kombucha.
            Usted se compromete a utilizar el sitio de manera responsable y legal, y a no realizar actividades
            que puedan dañar, deshabilitar o sobrecargar el sitio.</p>
          </div>
          <br />
          <div className='cards'>
            <h2 className='info'>3. Propiedad Intelectual</h2>
            <p className='write'>Todo el contenido del sitio, incluidos textos, imágenes, logotipos y gráficos,
            es propiedad de Kombucha Burbujas del Bosque o de sus respectivos propietarios.
            Está prohibida la reproducción total o parcial sin autorización previa.</p>
          </div>
          <br />
          <div className='cards'>
           <h2 className='info'>4. Modificaciones</h2>
           <p className='write'>Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento.
            Los cambios serán efectivos al ser publicados en esta página.
            Se recomienda revisar esta sección periódicamente.</p>
          </div>
          <br />
          <div className='cards'>
           <h2 className='info'>5. Productos y Precios</h2>
           <p className='write'>Nos reservamos el derecho de modificar los precios y la disponibilidad de 
            nuestros productos en cualquier momento. Aunque hacemos esfuerzos para mostrar información precisa,
            no garantizamos que los precios, descripciones o imágenes sean completamente precisos.</p>
          </div>
          <br /> 
          <div className='cards'> 
           <h2 className='info'>6. Envío y Entrega</h2>
           <p className='write'>Los tiempos de envío son estimaciones y pueden variar.
            No seremos responsables por retrasos en la entrega causados por circunstancias fuera de
            nuestro control.</p>
          </div>
          <br />
          <div className='cards'>
           <h2 className='info'>7. Limitación de Responsabilidad</h2>
           <p className='write'>En la medida máxima permitida por la ley, Kombucha Burbujas del Bosque
           no será responsable por daños directos, indirectos, incidentales o consecuentes que
            resulten del uso o la imposibilidad de uso del sitio o los productos adquiridos.</p>
          </div> 
          <br />
          <div className='cards'>
           <h2 className='info'>8. Ley Aplicable</h2>
           <p className='write'>Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de
            Costa Rica, sin tener en cuenta sus disposiciones sobre conflictos de leyes.</p>
          </div>
          <br />
          <div className='cards'>
           <h2 className='info'>9. Contacto</h2>
           <p className='write'>Si tiene alguna pregunta sobre estos Términos y Condiciones, puede contactarnos a través de nuestra
            pagina de Contactos.</p>
          </div>
        </div>
    </div>
  )
}

export default FormTerminos