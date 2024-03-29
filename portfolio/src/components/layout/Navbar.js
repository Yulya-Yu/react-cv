import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import './navbar.css'
import Logo from './logo.svg'
//import MainPage from 'MainPage'
//import About from 'About'
//import Services from 'Services'
//import ProjectList from '../projects/ProjectList'
//import Contact from 'Contact'



const Navbar = () => {

  return (
    <div className="navbar-fixed">
    <nav>
    <div className="nav-wrapper">
      <NavLink to="/" className="brand-logo"><img src={Logo} alt="website-logo"/></NavLink>
      <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><NavLink to="/about">about</NavLink></li>
        <li><NavLink to="/services">services</NavLink></li>
        <li><NavLink to="/portfolio">portfolio</NavLink></li>
        <li><NavLink to="/contact">contact</NavLink></li>
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