
import './Equipo.css'; 

import image_1 from '/img/img_e_1.png';
import image_2 from '/img/img_e_2.png';
import image_3 from '/img/img_e_3.png';
import image_4 from '/img/img_e_4.png';
import image_5 from '/img/img_m_1.png';
import image_6 from '/img/img_m_2.png';


export default function Equipo (){
    return(
        <div className="equipo">
            <div className="titulo-train">
                <h1>Entrenadores</h1>
                <div className="img-train">
                <img className="imgT" src={image_1} alt="Roger Vila"/>
                <img className="imgT" src={image_2} alt="Blai Sagales"/>
                <img className="imgT" src={image_3} alt="Ian Quinteros"/>
                <img className="imgT" src={image_4} alt="Aleix Blancafort"/>
                </div>
            </div>
            <div className="titulo-monit">
                <h1>Monitores</h1>
                <div className="img-moni">
                <img className="imgM" src={image_5} alt="Paula Alonso"/>
                <img className="imgM" src={image_6} alt="Nuria Galobardes"/>
                
                </div>
            </div>
        </div>
    )
}