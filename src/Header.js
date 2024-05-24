import React from 'react';

function Header() {
    return (
        <header>
            <a href="/">
                <img 
                    src={process.env.PUBLIC_URL + '/img/pngtree-receptionist-bell-hotel-logo-design-png-image_5294385.jpg'} 
                    alt="Alojamientos Concordia" 
                />
            </a>
        </header>
    );
}

export default Header;
