import React from 'react';
import certification1 from '@/assets/img/certifications/o365_enterprise_administrator.png'
import certification2 from '@/assets/img/certifications/excel_expert.png'
import certification3 from '@/assets/img/certifications/qb_pro_certified_advanced.png'
import certification4 from '@/assets/img/certifications/qb_pro_certified_elite.png'
import certification5 from '@/assets/img/certifications/outlook_pratice_test.png'
import Image from 'next/image';

const CertificationStyle = ({ sectionClass }) => {
    return (
        <>
            <div className={`partner-style-one-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="h2 sub-heading text-center mb-5">Nos certifications</div>
                        <ul className="d-flex flex-wrap flex-row justify-content-evenly align-content-sm-around">
                            <li className="m-3"><Image width={300} height={300} src={certification1} alt="Certification"/></li>
                            <li className="m-3"><Image width={300} height={300} src={certification2} alt="Certification"/></li>
                            <li className="m-3"><Image width={300} height={300} src={certification3} alt="Certification"/></li>
                            <li className="m-3"><Image width={300} height={300} src={certification4} alt="Certification"/></li>
                            <li className="m-3"><Image width={300} height={300} src={certification5} alt="Certification"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CertificationStyle;
