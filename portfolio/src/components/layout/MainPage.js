import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Linkedin from './linkedin.svg'
import Email from './email.svg'
import Github from './github.svg'
import './main-page.css'

class MainPage extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="main-page">
                    <div className="main-header">
                        <div className="intro-home">
                            <h1>Yuliya Yushkova</h1>
                            <p className="main-text">front-end developer.</p>
                            <button className="learn-more-btn"><a href="/about.html">GET CV</a></button>
                        </div>
                        <div className="icons-all">
                            <a href="https://www.linkedin.com/in/yuliya-yushkova/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} className="icon" alt="linkedin-icon" /></a>
                            <a href="mailto:kuroi.kasa1509@gmail.com" class="email-link" target="_blank" rel="noopener noreferrer"><img src={Email} className="icon" alt="email-icon" /></a>
                            <a href="https://github.com/Yulya-Yu" target="_blank" rel="noopener noreferrer"><img src={Github} className="icon github" alt="github-icon" /></a>
                            <p className="copyright">copyright© 2019 yushkova</p>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default MainPage; 