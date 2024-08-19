import Image from 'next/image';
import React from 'react';
import bannerContact from '@/assets/img/banner/banner-hong-kong-2.jpeg';
import Link from 'next/link';

const BreadCrumb = ({ breadCrumb, title }) => {
    return (
        <>
            <div className="breadcrumb-area bg-cover shadow dark text-center text-light">
                <div className="breadcrum-shape">
                    <Image
                        fill={true}
                        objectFit="cover"
                        src={bannerContact}
                        alt="Image Not Found"
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h1>{title ? title : "Error 404"}</h1>
                            <ul className="breadcrumb">
                                <li><Link href="/"><i className="fas fa-home"></i> Accueil</Link></li>
                                <li className='ms-1'>{breadCrumb ? breadCrumb : "not-found"}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BreadCrumb;
