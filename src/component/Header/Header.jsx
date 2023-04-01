import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='nav-bar'>
                <h1>Explore Knowledge Cafe</h1>
                 <div className='header'>
                    <div className='nav-link'>
                        <a href="./home">Home</a>
                        <a href="./about">About</a>
                        <a href="./contact">Contact Us</a>
                    </div>
                     <div>
                        <img className='header-img' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1680346086~exp=1680346686~hmac=d7391a302bb0f7bbaf89431c22e90dea64e2e71f35a6c7d0220d8268a5f4b310" alt="" />
                     </div>
                 </div>
            </nav>    
        </div>
    );
};
export default Header;