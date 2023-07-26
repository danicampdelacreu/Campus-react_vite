
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
                <h1>Entrenadors</h1>
                <div className="img-train">
                    <div className="imgT1Wrapper">
                        <img className="imgT1" src={image_1} />
                        <span>Roger Vila</span>
                    </div>
                    <div className="imgT2Wrapper">
                        <img className="imgT2" src={image_2} />
                        <span>Blai Sagales</span>
                    </div>
                    <div className="imgT3Wrapper">
                        <img className="imgT3" src={image_3} />
                        <span>Ian Quinteros</span>
                    </div>
                    <div className="imgT4Wrapper">
                        <img className="imgT4" src={image_4} />
                        <span>Aleix Blancafort</span>
                    </div>
                </div>
            </div>
            <div className="titulo-moni">
                <h1>Monitors</h1>
                <div className="img-moni">
                    <div className="imgM1Wrapper">
                        <img className="imgM1" src={image_5} />
                        <span>Paula Alonso</span>
                    </div>
                    <div className="imgM2Wrapper">
                        <img className="imgM2" src={image_6} />
                        <span>Nuria Galobardes</span>
                    </div>
                </div>
            </div>
        </div>

      
    )
}