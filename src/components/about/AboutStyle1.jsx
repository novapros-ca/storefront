import Image from 'next/image';
import React from 'react';
import aboutThumb from "@/assets/img/about/about-thumb.png"
import About1Card from './About1Card';

const AboutStyle1 = () => {
    return (
        <>
            <div className="about-style-one-area default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="about-style-one col-xl-6 col-lg-5">
                            <div className="h4 sub-heading">Qualité, expertise et satisfaction</div>
                            <h2 className="title mb-25">Un service de confiance</h2>
                            <p>
                                Découvrez nos services aux entreprises, flexibles et adaptés à vos besoins. Que vous soyez une start-up ou une entreprise établie, notre équipe vous offre expertise et soutien personnalisé pour vous aider à développer et faire croître votre activité en toute confiance.
                            </p>
                            <div className="owner-info">
                                <div >
                                    <h4>Frédérik Lavoie</h4>
                                    <span>Président</span>
                                </div>
                            </div>
                        </div>
                        <div className="about-style-one col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
                            <div className="about-thumb">
                                <Image style={{width: "400px"}} className="wow fadeInRight" src={aboutThumb} alt="Image Not Found" />
                                <About1Card />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyle1;
