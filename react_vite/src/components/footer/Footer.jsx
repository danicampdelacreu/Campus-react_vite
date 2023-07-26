import { Link } from 'react-router-dom'

import'./Footer.css'

export default function Footer(){
    return(
    <div className="footer">
        <div className="footer-nav">
            <Link to="/contacto">Contacte </Link>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSe6B07RzPaMJ2vzpqXyJtHYYUNgAYdDtHKiuUykSujZy-AYHQ/viewform">Inscripcions </Link>
        </div>
        <div className="footer-logos">
            <div className="footer-ubi">
                <h4>Info</h4>
                <Link to="https://www.google.es/maps/place/U.E.+GURB/@41.9551315,2.235136,17z/data=!3m1!4b1!4m6!3m5!1s0x12a526dc35c022f9:0xadd59de6e9e9c9b0!8m2!3d41.9551315!4d2.235136!16s%2Fg%2F11dxqgn081?entry=ttu">
                <img className="logoLF"src="/img/google_maps1.jpg"/>
                </Link>

                <Link to="https://www.instagram.com/campusuegurb/">
                <img className="logoIH"src="/img/logoinsta.jpg"/>
                </Link>
            </div>
            <div className="footer-patro">
                <h4>Patrocinadors</h4>
                <div className="logoPatro">
                    <img className="logoAF" src="/img/escut-gurb.png" />
                    <img className="logoGF" src="/img/logo_ue_gurb.png" />
                    <img className="logoMF" src="/img/logo_munt.png" />
                    <img className="logoBF" src="/img/logo_base.jpeg" />
                </div>
            </div> 
        </div>       
    </div>    
   )
}