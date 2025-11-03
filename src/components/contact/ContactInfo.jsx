import React from 'react';

const ContactInfo = () => {
    return (
        <>
            <div className="contact-style-one-info">
                <h2>Informations de contact</h2>
                <ul>
                    <li className="wow fadeInUp">
                        <div className="icon">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="content">
                            <h5 className="title">Bureau</h5>
                            <a href="tel:4188007784">(418) 800-7784</a>
                        </div>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="300ms">
                        <div className="icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="info">
                            <h5 className="title">Nous trouvez</h5>
                            <p>
                                <a target="_blank" href="https://maps.app.goo.gl/z9eyKD5zcK33aD3x7">126 53ème rue Est, Québec, QC</a>
                            </p>
                        </div>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="500ms">
                        <div className="icon">
                            <i className="fas fa-envelope-open-text"></i>
                        </div>
                        <div className="info">
                            <h5 className="title">Courriel</h5>
                            <a href="mailto:info@novapros.ca">info@novapros.ca</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ContactInfo;
