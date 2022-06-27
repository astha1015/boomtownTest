import React, { useState } from 'react'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <div className="navigation">
      <div className="nav-bar">

        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link to = '/'>Home</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to = '/repo'>Repositories</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to = '/events'>Events</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to = '/members'>Members</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to = '/hooks'>Hooks</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
           <Link to = '/issues'>Issues</Link>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <XIcon className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Navbar;