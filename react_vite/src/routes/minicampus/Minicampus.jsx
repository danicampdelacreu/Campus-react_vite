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
    setAutoplaySpeed(4500); // Establecer la velocidad deseada después de 0 segundos
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 4500,
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
      <Link to="https://docs.google.com/forms/d/e/1FAIpQLSe6B07RzPaMJ2vzpqXyJtHYYUNgAYdDtHKiuUykSujZy-AYHQ/viewform">Inscripciones</Link>
      </div>
      <div className="minicampus-expli">
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat a officiis veniam aliquid. Dolorem tenetur animi optio repellat consectetur, numquam repellendus debitis, neque, impedit quas odit officiis nostrum eveniet reprehenderit?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, cum amet? Voluptate quibusdam necessitatibus perferendis velit corrupti quas, ea reprehenderit magnam maxime unde deserunt alias quisquam et quasi illo voluptas?
      </h4>
      </div>
    </div>
  );
}

