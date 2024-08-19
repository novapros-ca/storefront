import React from 'react';

const Loading = () => {
    return (
        <>
            <div id="preloader">
                <div id="consua-preloader" className="consua-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="N" className="letters-loading">
                                N
                            </span>
                            <span data-text-preloader="O" className="letters-loading">
                                O
                            </span>
                            <span data-text-preloader="V" className="letters-loading">
                                V
                            </span>
                            <span data-text-preloader="A" className="letters-loading">
                                A
                            </span>
                            <span data-text-preloader="P" className="letters-loading">
                                P
                            </span>
                            <span data-text-preloader="R" className="letters-loading">
                                R
                            </span>
                            <span data-text-preloader="O" className="letters-loading">
                                O
                            </span>
                            <span data-text-preloader="S" className="letters-loading">
                                S
                            </span>
                        </div>
                    </div>
                    <div className="loader">
                        <div className="row">
                        <div className="col-3 loader-section section-left">
                                <div className="bg"></div>
                            </div>
                            <div className="col-3 loader-section section-left">
                                <div className="bg"></div>
                            </div>
                            <div className="col-3 loader-section section-right">
                                <div className="bg"></div>
                            </div>
                            <div className="col-3 loader-section section-right">
                                <div className="bg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loading;
