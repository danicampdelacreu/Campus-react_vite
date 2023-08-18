import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Minicampus.css'; // Importa los estilos CSS

const imageUrls = [
  './img/foto1.jpg',
  './img/foto2.jpg',
  './img/foto3.jpg',
  './img/foto4.jpg',
  './img/foto5.jpg',
  './img/foto6.jpg',
  './img/foto1.jpg',
  './img/foto2.jpg',
];

export default function MiniCampus() {
  const [autoplaySpeed, setAutoplaySpeed] = useState(0); // Estado para controlar la velocidad inicial

  // Utilizar useEffect para actualizar la velocidad del carrusel después de montar el componente
  useEffect(() => {
    setAutoplaySpeed(3000); // Establecer la velocidad deseada después de 0 segundos
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: autoplaySpeed,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="minicampus-general">
      <h1>MiniCampus</h1>
      <div className="minicampus-container">
        <Slider {...settings}>
          {imageUrls.map((url, index) => (
            <div key={index} className="minicampus-slide">
              <img
                src={url}
                alt={`Imagen ${index + 1}`}
                className="minicampus-image"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="minicampus-link">
        <Link to="https://docs.google.com/forms/d/e/1FAIpQLSe6B07RzPaMJ2vzpqXyJtHYYUNgAYdDtHKiuUykSujZy-AYHQ/viewform">Inscripcions</Link>
      </div>
      <div className="minicampus-expli">
        <p>
          El mini campus de Gurb és una variant del campus principal per als més petits de casa, que combina el futbol amb activitats lúdiques
          i recreatives addicionals. A més de les sessions de futbol, els nens i nenes també gaudeixen de jocs, manualitats i altres activitats
          per garantir una experiència equilibrada i enriquidora durant el campus. Aquesta combinació permet que els participants no estiguin exposats
          constantment al sol i puguin gaudir d'un repertori més ampli d'activitats, fomentant la diversió, la creativitat i la interacció social.
        </p>
      </div>
    </div>
  );
}

