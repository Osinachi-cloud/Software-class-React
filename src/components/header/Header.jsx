import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export const Header = () => {
  return (
    <>
      <nav className='nav-wrapper'>
        <div>Title</div>
        <ul>
          <li>Menu</li>
          <li>Menu</li>
          <li>Menu</li>
          <li>Menu</li>
          <li>Menu</li>
        </ul>
        <div>
          <Link to={`cart`}>
            <i class="fa fa-cart-plus" ></i>
          </Link>
        </div>
      </nav>
    </>
  )
}

