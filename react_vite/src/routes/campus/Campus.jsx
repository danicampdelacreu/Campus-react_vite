import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Campus.css'; // Importa los estilos CSS

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

export default function Campus() {
  const [autoplaySpeed, setAutoplaySpeed] = useState(0); // Estado para controlar la velocidad inicial

  // Utilizar useEffect para actualizar la velocidad del carrusel después de montar el componente
  useEffect(() => {
    setAutoplaySpeed(3000); // Establecer la velocidad deseada después de 0 segundos
  }, []);

  // Configuración para un carrusel de imágenes
  const settings = {
    dots: true,             // Muestra puntos de navegación
    infinite: true,         // Permite desplazarse infinitamente
    speed: 3000,            // Velocidad de cambio de imágenes (3 segundos)
    autoplay: true,         // Reproduce automáticamente las imágenes
    autoplaySpeed: autoplaySpeed, // Usa la velocidad que configuramos anteriormente
    slidesToShow: 1,        // Muestra una imagen a la vez
    slidesToScroll: 1,      // Se desplaza una imagen a la vez
  };

  return (
    <div className="campus-general">
      <h1>Campus</h1>
      <div className="campus-container">
        <Slider {...settings}> 
          {imageUrls.map((url, index) => (             // mapea imageUrls por cada imagen se ejecuta una funcion
            <div key={index} className="campus-slide"> 
              <img                                     // creamos un div dentro de cada imageUrls
                src={url}
                alt={`Imagen ${index + 1}`}            // dentro div se coloca un elemento img 
                className="campus-image"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="campus-link">
        <Link to="https://docs.google.com/forms/d/e/1FAIpQLSe6B07RzPaMJ2vzpqXyJtHYYUNgAYdDtHKiuUykSujZy-AYHQ/viewform">Inscripcions</Link>
      </div>
      <div className="campus-expli">
        <p>
          El campus de Gurb és un programa enfocat exclusivament al futbol.
          És un entorn dinàmic i emocionant on els nens i nenes tenen l'oportunitat de millorar les seves habilitats futbolístiques a través de diferents entrenaments,
          exercicis i partits. El campus de Gurb ofereix una immersió total en l'esport, amb tècnics experimentats que guien als participants en el desenvolupament de
          les seves habilitats i estratègies del joc.
        </p>
      </div>
    </div>
  );
}

