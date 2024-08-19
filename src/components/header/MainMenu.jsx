import React from 'react';
import Link from 'next/link';

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/contact">contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;
