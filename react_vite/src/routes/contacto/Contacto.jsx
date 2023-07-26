import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Contacto.css';

export default function Contacto ()  {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    if (formData.get('user_name') && formData.get('user_email') && formData.get('message')) {
      emailjs
        .sendForm('service_sjyf30z', 'template_itkkk5i', form.current, 'ybVHXbi9wadjWsNQj')
        .then(
          (result) => {
            console.log(result.text);
            alert('¡Mensaje enviado correctamente! Nos pondremos en contacto con usted ');
            window.location.reload();
          },
          (error) => {
            console.log(error.text);
            alert('Ocurrió un error al enviar el mensaje. Inténtalo nuevamente más tarde.');
          }
        );
    } else {
      alert('Por favor, rellena todos los campos.');
    }
  };

  return (
    <div className="contacto">
      <form ref={form} onSubmit={sendEmail}>
        <div className="contacto-name">
          <label>Nom</label>
          <input type="text" name="user_name" />
        </div>
        <div className="contacto-email">
          <label>Email</label>
          <input type="email" name="user_email" />
        </div>
        <div className="contacto-message">
          <label>Missatge</label>
          <textarea name="message" />
        </div>  
        <div className="contacto-submit">
          <input type="submit" value="Enviar" />
        </div>  
      </form>
    </div>
  );
};




