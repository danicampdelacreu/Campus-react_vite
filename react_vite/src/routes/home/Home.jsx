import { Link } from 'react-router-dom'

import'./Home.css'

export default function Home(){
    return(
        <>
            <div className="home">
                <div className="homeFijo">
                    <img className="imgF" src="/img/foto1.jpg" />
                </div>
                <div className="homeIns">
                    <Link 
                        to="https://docs.google.com/forms/d/e/1FAIpQLSe6B07RzPaMJ2vzpqXyJtHYYUNgAYdDtHKiuUykSujZy-AYHQ/viewform">INSCRIPCIONS 
                    </Link>
                </div>
                <div className="home1">
                    <p>
                        Benvinguts al Campus de Futbol de la U.E Gurb!<br/>
                        El nostre campus no està pensat únicament per a entrenaments i desenvolupament tècnic,
                        sinó perquè els jugadors/es puguin desconnectar, passar-ho bé i gaudir del joc que tant els apassiona.
                    </p>
                    <img className="img1" src="/img/foto2.jpg" />
                </div>
                <div className="home2">
                    <p>
                        Les nostres activitats van més enllà del futbol.<br/> 
                        Organitzem jocs, competicions, activitats recreatives i excursions per a tots els participants. 
                        També disposem d'instal·lacions esportives de primera categoria perquè puguin practicar altres 
                        esports i gaudir d'un entorn natural excepcional
                    </p>
                    <img className="img2" src="/img/foto3.jpg" />
                </div>
                <div className="home3">
                    <p>
                        -TECNICA<br/>
                        -DIVERSIÓ<br/>
                        -MASTER CLASS<br/>
                        -ACTIVITATS<br/>
                    </p>
                    <img className="img3" src="/img/foto6.jpg" />
                </div>   
            </div>
        </>
    )
}