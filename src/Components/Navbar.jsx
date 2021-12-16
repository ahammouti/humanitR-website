import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../Styles/components/navbar.css'
import burgerButton from '../Assets/images/mobile/icon-burgerButton.svg'
import closeButton from '../Assets/images/mobile/icon-closeButton.svg'
import bgOrange from '../Assets/images/mobile/eclipse-orange.svg'
import sloganHumanitR from '../Assets/images/mobile/slogan-humanitR.svg'
import logoHumanitR from '../Assets/images/mobile/logo-humanitR.svg'

import bgOrangeTablet from '../Assets/images/tablet/bgOrange_tablet.svg'

const Navbar = () => {

    const [checkWidth, setCheckWidth] = useState(window.innerWidth);

    const [closeNav, setCloseNav] = useState(true);
    const closeSidebar = () => setCloseNav(!closeNav);

    const checkFunc = () => setCheckWidth(window.innerWidth)

    useEffect(() => {

        window.addEventListener('resize', checkFunc)

        return () => {
            window.removeEventListener('resize', checkFunc)
        }
    }, [])

    return (
        <div className="container-navbar">
            {checkWidth < 700 && (
                <div className="wrap-logo-donation-burger">
                    <img className="bgOrange" src={bgOrange} alt="" />
                    <div className="wrap-burgerButton">
                        <Link className="burgerButton" to="#" onClick={closeSidebar}><img src={burgerButton} alt="fermer-menu" /></Link>
                    </div>
                    <div className="wrap-slogan">
                        <img className="sloganHumanitR" src={sloganHumanitR} alt="slogan" />
                    </div>
                    <img className="logoHumanitR" src={logoHumanitR} alt="logo" />
                    <div className="wrap-buttonDonation">
                        <a href="https://www.helloasso.com/associations/humanit-r/formulaires/5" target="_blank" className="buttonDonation">Faire un don</a>
                    </div>
                </div>
            )}
            {/* {checkWidth < 1000 && (
                <div className="container-tablet">
                    <div className="wrap-logo-donation-burger-tablet">
                        <img className="bgOrange" src={bgOrangeTablet} alt="" />
                        <div className="wrap-burgerButton">
                            <Link className="burgerButton" to="#" onClick={closeSidebar}><img src={burgerButton} alt="fermer-menu" /></Link>
                        </div>
                        <div className="wrap-slogan">
                            <img className="sloganHumanitR" src={sloganHumanitR} alt="slogan" />
                        </div>
                        <img className="logoHumanitR" src={logoHumanitR} alt="logo" />
                        <div className="wrap-buttonDonation">
                            <Link to="/" className="buttonDonation">Faire un don</Link>
                        </div>
                    </div>
                </div>
            )} */}
            <nav className={closeNav ? "clickCloseNavbar navbar" : "navbar"}>
                <div className="wrap-closeButton">
                    <Link className="closeButton " to="#" onClick={closeSidebar}><img src={closeButton} alt="fermer menu" /></Link>
                </div>
                <Link className="link" to="/"><span>Accueil</span></Link>
                <Link className="link" to="/forages"><i></i><span>Les forages de puits</span></Link>
                <Link className="link" to="/parrainage"><span>Le parrainage d'orphelins</span></Link>
                <Link className="link" to="/projets-culturels"><span>Nos projets culturels</span></Link>
            </nav>
        </div>
    )
}

export default Navbar
