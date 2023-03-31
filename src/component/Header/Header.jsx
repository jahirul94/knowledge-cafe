import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='nav-bar'>
                <h1> Wheathers Of Developers</h1>
                 <div className='header'>
                    <div className='nav-link'>
                        <a href="./home">Home</a>
                        <a href="./about">About</a>
                        <a href="./contact">Contact Us</a>
                    </div>
                     <div>
                        <img className='header-img' src="../../../public/user-image/user-7.jpg" alt="" />
                     </div>
                 </div>
            </nav>    
        </div>
    );
};

export default Header;