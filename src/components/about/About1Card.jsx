"use client"
import React from 'react';
import CountUp from 'react-countup';

const About1Card = () => {
    return (
        <>
            <div className="about-card wow fadeInUp" data-wow-delay="500ms">
                <ul>
                    <li>
                        <div className="icon">
                            <i className="flaticon-license"></i>
                        </div>
                        <div className="fun-fact">
                            <div className="counter">
                                <div className="timer">
                                    <CountUp enableScrollSpy end={100} delay={1} duration={2} /></div>
                                <div className="operator">%</div>
                            </div>
                            <span className="medium">Satisfaction</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="fas fa-people-group"></i>
                        </div>
                        <div className="fun-fact">
                            <div className="counter">
                                <div className="timer">  <CountUp enableScrollSpy end={30} delay={1} duration={2} /></div>
                                <div className="operator">+</div>
                            </div>
                            <span className="medium">Années d'expériences</span>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default About1Card;
