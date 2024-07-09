import React from 'react';
import logo from '../../asset/logo.png';
import contactImg from '../../asset/contact.png';
import {Link} from 'react-scroll';
import './navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">HOME</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">ABOUT</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100}duration={500}className="desktopMenuListItem">BLOG</Link>
            <Link activeClass='active' to='services' spy={true} smooth={true} offset={-100}  className="desktopMenuListItem">SERVICES</Link>

        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Us </button>

    </nav>
  )
}

export default Navbar;
