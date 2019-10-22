import React from 'react'
// import { Link } from 'react-router-dom'
import './navbar.css'
import Logo from './logo.svg'


const Navbar = () => {

  return (
    <div className="navbar-fixed">
    <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo"><img src={Logo} alt="website-logo"/></a>
      <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">about</a></li>
        <li><a href="/">services</a></li>
        <li><a href="/">portfolio</a></li>
        <li><a href="/">blog</a></li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
        <li><a href="/">about</a></li>
        <li><a href="/">services</a></li>
        <li><a href="/">portfolio</a></li>
        <li><a href="/">blog</a></li>
  </ul>
  </div>
  )
}


export default Navbar