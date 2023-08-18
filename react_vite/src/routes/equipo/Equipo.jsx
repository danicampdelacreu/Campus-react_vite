
import './Equipo.css';

import image_1 from '/img/train1.png';
import image_2 from '/img/train5.png';
import image_3 from '/img/train3.png';
import image_4 from '/img/train6.png';
import image_5 from '/img/train7.png';
import image_6 from '/img/train2.png';
import image_7 from '/img/train4.png';


export default function Equipo() {
    return (
        <div className="equipo">
            <div className="titulo-train">
                <div className="img-train">
                    <div className="imgT1Wrapper">
                        <img className="imgT1" src={image_1} />
                        <span>Roger Vila <br /> Entrenador</span>
                    </div>
                    <div className="imgT4Wrapper">
                        <img className="imgT4" src={image_4} />
                        <span>Aleix Blancafort <br /> Entrenador</span>
                    </div>
                    <div className="imgT3Wrapper">
                        <img className="imgT3" src={image_3} />
                        <span>Ian Quinteros <br /> Entrenador</span>
                    </div>
                    <div className="imgT2Wrapper">
                        <img className="imgT2" src={image_2} />
                        <span>Blai Sagales <br /> Entrenador</span>
                    </div>
                </div>
            </div>
            <div className="titulo-moni">
                <div className="img-moni">
                    <div className="imgM2Wrapper">
                        <img className="imgM2" src={image_7} />
                        <span>Pau Arumi <br /> Entrenador</span>
                    </div>
                    <div className="imgM1Wrapper">
                        <img className="imgM1" src={image_5} />
                        <span>Paula Alonso <br /> Monitor</span>
                    </div>
                    <div className="imgM2Wrapper">
                        <img className="imgM2" src={image_6} />
                        <span>Joan Arumi <br /> Entrenador</span>
                    </div>
                </div>
            </div>
        </div>


    )
}