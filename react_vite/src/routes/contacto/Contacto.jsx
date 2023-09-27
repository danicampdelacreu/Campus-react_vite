import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Contacto.css';

export default function Contacto() {
  const form = useRef(); // creamos referencia REF para acceder al elemento formulario del Dom mas abajo

  const sendEmail = (e) => { // funcion que se ejecuta cuando se envia formulario
    e.preventDefault();      // previene comportamiento predeterminado de formulario

    const formData = new FormData(form.current); // recopilamos datos formulario

    if (formData.get('user_name') && formData.get('user_email') && formData.get('message')) {
      emailjs
        .sendForm('service_sjyf30z', 'template_itkkk5i', form.current, 'ybVHXbi9wadjWsNQj')
        .then( //utilizamos promes para manejar respueste exsito servidor
          (result) => { // si envio es correcto actua result
            console.log(result.text);
            alert('¡Mensaje enviado correctamente! Nos pondremos en contacto con usted ');
            window.location.reload(); // recargar pagina para borrar lo escrito
          },
          (error) => { // si tenemos un error de servidor actua error
            console.log(error.text);
            alert('Ocurrió un error al enviar el mensaje. Inténtalo nuevamente más tarde.');
          }
        );
    } else { // en caso contraro al if salta el alert
      alert('Por favor, rellena todos los campos.');
    }
  };

  return (
    <div className="contacto">
      <form ref={form} onSubmit={sendEmail}>        {/*  ref={form} --Define formulario HTML permite acceder formulario dede codigo JS*/}
        <div className="contacto-name">             {/*  onSubmit={sendEmail} cuando usuario haga click "enviar" ejecuta la funcion 'sendEmail */}
          <label>Nom</label>
          <input type="text" name="user_name" />    {/*  input tipo text */}
        </div>
        <div className="contacto-email">
          <label>Email</label>
          <input type="email" name="user_email" />  {/*  input tipo email */}
        </div>
        <div className="contacto-message">
          <label>Missatge</label>
          <textarea name="message" />
        </div>
        <div className="contacto-submit">
          <input type="submit" value="Enviar" />    {/*  input tipo submit */}
        </div>
      </form>
    </div>
  );
};




