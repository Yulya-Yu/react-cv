import React, { Component } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import {Link} from 'react-router-dom'
import about from './about.svg'
import Linkedin from './linkedin.svg'
import Email from './email.svg'
import Github from './github.svg'
import './about.css'


class About extends Component {
    render() {
        return (
            <div class="about">
            <img src={about} class="about-img" alt="about-icon" />
            <div class="about-text">
               <h3>Hey, I'm <span>Julia</span></h3>
               <p>Front-End Developer based in Tomsk, Russia. I have a passion for web design and love to create clean 
                   and responsive layouts using the latest technologies available. 
                   If you have a project in mind, think you can use my help with something or 
                   just fancy saying hi, get in touch.</p>
                   <div class="icons-about">
                            <a href="https://www.linkedin.com/in/yuliya-yushkova/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} class="icon" alt="linkedin-icon" /></a>
                            <a href="mailto:kuroi.kasa1509@gmail.com" class="email-link" target="_blank" rel="noopener noreferrer"><img src={Email} class="icon" alt="email-icon" /></a>
                            <a href="https://github.com/Yulya-Yu" target="_blank" rel="noopener noreferrer"><img src={Github} class="icon github" alt="github-icon" /></a>
                   </div>
            </div>
        </div>
        );
    }
}

export default About; 