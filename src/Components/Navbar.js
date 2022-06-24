import React from 'react'
import '../Styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='links'>
            <a href = '/'>Home</a>
            <a href = '/repo'>Repositories</a>
            <a href = '/events'>Events</a>
            <a href = '/members'>Members</a>
        </div>
    </div>
  )
}

export default Navbar