import React, { useEffect, useState } from 'react';

import Navbar from '../Components/Navbar';
import '../Styles/pages/home.css';
import bgImg_mobile from '../Assets/images/mobile/eclipse-img.svg';
import miniElipseTransparence_mobile from '../Assets/images/mobile/transparence.svg';
import miniElipseExigence_mobile from '../Assets/images/mobile/exigence.svg';
import miniElipseEthique_mobile from '../Assets/images/mobile/ethique.svg';
import bgImg_section2_mobile from '../Assets/images/mobile/elipse-section2Png.png';
import bgOrange from '../Assets/images/tablet/bgOrange_tablet.svg';
import bgImgTablet from '../Assets/images/tablet/bgImg_tablet.svg';
import logoHumanitRTablet from '../Assets/images/tablet/logoHumanitR-tablet.png';
import video from '../Assets/videos/Association Humanit-R (1).mp4.crdownload';
import elipseOrangeSection2 from '../Assets/images/mobile/section2/EllipseOrange.svg';
import ellipseImgSection2 from '../Assets/images/mobile/section2/ellipse-img-section2jpg.jpg';

import { Link } from 'react-router-dom';

const Home = () => {

    const [checkWidth, setCheckWidth] = useState(window.innerWidth);
    const checkFunc = () => setCheckWidth(window.innerWidth)

    useEffect(() => {

        window.addEventListener('resize', checkFunc)

        return () => {
            window.removeEventListener('resize', checkFunc)
        }
    }, [])

    return (
        <div className="home">
            {/* Version MOBILE */}
            {checkWidth < 700 && (
                <div className="container-mobile">
                    <header>
                        <Navbar />
                    </header>
                    <section className="wrap-section1-mobile">
                        <img className="bgImg-mobile" src={bgImg_mobile} alt="" />
                        <h1 className="mainTitleSection1-mobile">Découvrez nos projets</h1>
                        <div className="wrap-miniElipse">
                            <img src={miniElipseTransparence_mobile} alt="Transparence" className="miniElipse" />
                            <img src={miniElipseExigence_mobile} alt="Exigence" className="miniElipse" />
                            <img src={miniElipseEthique_mobile} alt="Ethique" className="miniElipse" />
                        </div>
                    </section>
                    <section className="wrap-section2-mobile">
                        <img className="elipseOrangeSection2" src={elipseOrangeSection2} alt="" />

                        <div className="wrap-video-section2-mobile">
                            <video id="background-video" loop muted autoPlay>
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <h2 className="mainTitle-section2">L'accès à <strong>l'eau potable...</strong> <br /> un combat pour la <strong>vie !</strong></h2>
                    </section>
                    <section className="wrap-section3-mobile">
                        <img src={ellipseImgSection2} alt="" />
                    </section>

                </div>
            )}
            {/* Version DESKTOP */}
            {checkWidth > 700 && (
                <>
                    <div className="wrap-section1-desktop">
                        <img className="bgOrange-desktop" src={bgOrange} alt="" />
                        <img className="bgImg-tablet" src={bgImgTablet} alt="" />
                        <div className="wrap-header-desktop">
                            <header className="navbar-desktop">
                                <Navbar />
                            </header>
                        </div>
                        <div className="box">
                            <div className="wrap-logoHumanitR">
                                <img className="logoHumanitR-desktop" src={logoHumanitRTablet} alt="logo" />
                            </div>
                            <div className="wrap-buttonDonation-desktop">
                                <a href="https://www.helloasso.com/associations/humanit-r/formulaires/5" target="_blank" className="buttonDonation-desktop">Faire un don</a>
                            </div>
                            <div className="wrap-mainTitleSection1-desktop">
                                <h1 className="mainTitleSection1-desktop">Découvrez <br /> nos projets</h1>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Home
