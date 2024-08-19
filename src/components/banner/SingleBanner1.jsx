import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleBanner1 = ({banner, invert, subTitleClassName}) => {
    const {bgThumb, title, title1, title2, shapeThumb, btnText} = banner

    const renderTitle = () => {
        if (invert) {
            return (
                <>
                    <h4 className={subTitleClassName}>{title1} {title2}</h4>
                    <h2>{title}</h2>
                </>
            )
        }
        return (
            <>
                <h2 className={subTitleClassName}>{title}</h2>
                <h4>{title1} {title2}</h4>
            </>
        )
    }
    return (
        <>
            <div className="banner-thumb bg-cover shadow dark"
                 style={{background: `url(/assets/img/banner/${bgThumb})`}}></div>
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-7 offset-xl-5">
                        <div className="content">
                            {renderTitle()}
                            <div className="button mt-40">
                                <Link className="btn-animation" href="/contact"><i className="fas fa-arrow-right"></i>
                                    <span>{btnText}</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-shape-bg">
                <Image src={`/assets/img/shape/${shapeThumb}`} width={916} height={693} alt="Shape"/>
            </div>
        </>
    );
};

export default SingleBanner1;
