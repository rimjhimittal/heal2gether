
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={Logo} className= 'logo' alt='heal2gether-logo' />
      </div>
      <div className='pages'>
            <Link to='/home'>HOME</Link>
            <Link to='/forums'>FORUMS</Link>
            <Link to='/resources'>RESOURCES</Link>
            <Link to='/events'>EVENTS</Link>
            <Link to='/online-therapy'>ONLINE THERAPY</Link>
      </div>
    </div>
  );
}

