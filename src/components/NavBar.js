import React from 'react'
import {FaAutoprefixer} from 'react-icons/fa'
import {Link} from 'react-router-dom'


function NavBar() {
  return (
    <div className='header'>
        <FaAutoprefixer className='icon'/>
        <h2>Abass phone and Accessories</h2>
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/about">About Us</Link></li>
          <li><Link to ="/products">Products</Link></li>
          <li><Link to ="/contact">Contact Us</Link></li>
        </ul>
    </div>
  )
}

export default NavBar