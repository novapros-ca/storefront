import Image from 'next/image';
import React from 'react';
import logo from '@/assets/img/logo-footer.png';
import Link from 'next/link';

const FooterStyle1 = ({ shape, shapeClass, formStyle }) => {
    return (
        <>
            <footer className="bg-dark text-light">
                <div className="container">
                    <div className="f-items relative pt-70 pb-120 pt-xs-0 pb-xs-50">
                        <div className="row flex justify-content-evenly">
                            <div className="col-lg-10 col-md-12 footer-item pr-50 pr-xs-15">
                                <div className="f-item about">
                                    <Link href="/">
                                        <Image  className="logo" src={logo} alt="Logo"/>
                                    </Link>
                                    <div className="opening-hours">
                                        <h5>Heures d'ouvertures</h5>
                                        <ul>
                                            <li>
                                                <div className="working-day">Lundi – Vendredi</div>
                                                <div className="marker"></div>
                                                <div className="working-hour">8am – 17pm</div>
                                            </li>
                                            <li>
                                                <div className="working-day">Samedi - Dimanche</div>
                                                <div className="marker"></div>
                                                <div className="working-hour">Fermé</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-12 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title"><Link href="/">Plan du site</Link></h4>
                                    <div className="f-item link">
                                        <ul>
                                            <li>
                                                <Link href="/">Accueil</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>&copy; Copyright {(new Date().getFullYear())}. Tous droits réservés par NovaPros</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterStyle1;
