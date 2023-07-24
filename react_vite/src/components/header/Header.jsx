import { Outlet, Link } from 'react-router-dom';

import './Header.css'

export default function Header(){
    return(
        <>
        <div className="header">
            <div className="headerLogo">
                <img className="logoH" src="/img/logo_ue_gurb.png" />
            </div>
            <div className="headerLink">
                <Link to="/">INICI </Link>
                <Link to="/equipo">EQUIP </Link>
                <Link to="/campus">CAMPUS </Link>
                <Link to="/minicampus">MINI CAMPUS </Link>
                <Link to="https://photos.google.com/share/AF1QipMnXwnyedgxARssgO2tbju4sXd2c8sVVOYG-UOF1uQRMiMqPCI17X7vR1K3aMM2zQ?key=NGJQZlNBVTNFSjJTRGR6ZGk1MEUwR1psOTZUNFpB">FOTOS </Link>
            </div>             
        </div>
        <Outlet />
        </>
    )
}