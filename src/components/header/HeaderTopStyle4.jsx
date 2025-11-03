import React from 'react';
import SocialShare from '../utilities/SocialShare';

const HeaderTopStyle4 = () => {
    return (
        <>
            <div className="top-bar-area top-bar-style-one bg-dark text-light">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-7">
                            <ul className="item-flex">
                                <li>
                                    <a target="_blank" href="https://maps.app.goo.gl/z9eyKD5zcK33aD3x7"><i className="fas fa-map-marker-alt"></i> 126 53e rue Est, Québec, QC</a>
                                </li>
                                <li>
                                    <a href="tel:4188007784" target="_blank"><i className="fas fa-phone-alt"></i>(418) 800-7784</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-5 text-end">
                            <div className="social">
                                <ul>
                                    <SocialShare />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTopStyle4;
