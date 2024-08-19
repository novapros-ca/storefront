"use client"
import React from 'react';
import CountUp from 'react-countup';

const AchievementCounter1 = () => {
    return (
        <>
            <div className="achivement-counter">
                <ul>
                    <li>
                        <div className="icon">
                            <i className="flaticon-handshake"></i>
                        </div>
                        <div className="fun-fact">
                            <div className="counter">
                                <div className="timer"><CountUp end={100} enableScrollSpy /></div>
                                <div className="operator">+</div>
                            </div>
                            <span className="medium">Conseils donnés depuis 30 ans</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="flaticon-puzzle-piece"></i>
                        </div>
                        <div className="fun-fact">
                            <div className="counter">
                                <div className="timer"><CountUp end={55} enableScrollSpy /></div>
                                <div className="operator">+</div>
                            </div>
                            <span className="medium">Projets accomplis</span>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default AchievementCounter1;
