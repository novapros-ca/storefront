import Image from 'next/image';
import React from 'react';
import shape17 from '@/assets/img/shape/17.png'

const ChooseStyle1 = () => {
    return (
        <>
            <div className="choose-us-style-one-area default-padding text-light">
                <div className="cover-bg" style={{ backgroundImage: `url(/assets/img/banner/team-meeting.jpeg)` }}></div>
                <div className="shape-left-top">
                    <Image src={shape17} alt="Shape" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pr-80 pr-md-15 pr-xs-15">
                            <div className="choose-us-style-one">
                                <h2 className="title mb-35">Philosophie</h2>
                                <ul className="list-item">
                                    <li className="wow fadeInUp">
                                        <h4>Expertise et Dévouement</h4>
                                        <p>
                                            Nos experts sont chevronnés, chacun apportant une expertise spécialisée et une expérience approfondie en comptabilité, en ressources humaines, en informatique et en entreprise. Leur dévouement à l'excellence et leur capacité à anticiper les besoins de nos clients sont ce qui distingue notre équipe.
                                        </p>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="300ms">
                                        <h4>Approche Collaborative et Innovation</h4>
                                        <p>
                                            Ils combinent leur savoir-faire technique avec une compréhension aiguë des défis spécifiques rencontrés par les entreprises, offrant ainsi des conseils précieux et des solutions stratégiques. Leur approche collaborative et leur engagement envers l'innovation garantissent une comptabilité et une gestion efficace et proactive, adaptée à chaque client.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChooseStyle1;
