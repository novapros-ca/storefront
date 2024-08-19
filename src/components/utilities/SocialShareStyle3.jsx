import Link from 'next/link';
import React from 'react';

const SocialShareStyle3 = () => {
    return (
        <>
            <li className="facebook">
                <Link href="https://www.facebook.com/profile.php?id=61564415243700" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                </Link>
            </li>
            <li className="twitter">
                <Link href="https://x.com/NovaProsCa" target="_blank">
                    <i className="fab fa-x-twitter"></i>
                </Link>
            </li>
            <li className="linkedin">
                <Link href="https://www.linkedin.com/company/novapros/" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                </Link>
            </li>
        </>
    );
};

export default SocialShareStyle3;
