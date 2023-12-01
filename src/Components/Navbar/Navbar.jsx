import React from 'react'
import './Navbar.css'
import logo from '../Assets/shopvoid_logo.png'
import navprofileIcon from '../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" className="shopvoid-logo"/>
      <p className='shopvoid-text'>ShopVoid</p>
      <p>Admin Panel</p>
      <img src={navprofileIcon} alt="" />
    </div>
  )
}

export default Navbar
