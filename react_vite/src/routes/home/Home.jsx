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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolores tenetur voluptatibus, repellat labore, doloremque non harum eveniet, a neque sequi! Numquam ad beatae, cum dolor corporis molestiae omnis harum.</p>
                    <img className="img1" src="/img/foto2.jpg" />
                </div>
                <div className="home2">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat obcaecati illo corporis ut cumque beatae. Nesciunt libero aut exercitationem, sit maxime vitae quam accusantium, quia, doloribus excepturi perferendis tempora ipsum!</p>
                    <img className="img2" src="/img/foto3.jpg" />
                </div>
                <div className="home3">
                    <p>Explicacio</p>
                    <img className="img3" src="/img/foto6.jpg" />
                </div>   
            </div>
        </>
    )
}