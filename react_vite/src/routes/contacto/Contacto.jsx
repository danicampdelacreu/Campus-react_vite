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
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};




