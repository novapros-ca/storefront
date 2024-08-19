import Link from 'next/link';
import React from 'react';

const SocialShare = () => {
    return (
        <>
            <li>
                <Link className="facebook" href="https://www.facebook.com/profile.php?id=61564415243700" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                </Link>
            </li>
            <li>
                <Link className="twitter" href="https://x.com/NovaProsCa" target="_blank">
                    <i className="fab fa-x-twitter"></i>
                </Link>
            </li>
            <li>
                <Link className="linkedin" href="https://www.linkedin.com/company/novapros/" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                </Link>
            </li>
        </>
    );
};

export default SocialShare;
