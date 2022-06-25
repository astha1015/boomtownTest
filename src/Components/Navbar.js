import React from 'react'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to = '/'>Home</Link>
            <Link to = '/repo'>Repositories</Link>
            <Link to = '/events'>Events</Link>
            <Link to = '/members'>Members</Link>
        </div>
    </div>
  )
}

export default Navbar