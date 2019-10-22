import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, HashRouter } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import MainPage from './components/layout/MainPage'
import About from './components/layout/About'
import Services from './components/layout/Services'
import ProjectList from './components/projects/ProjectList'
import Contact from './components/layout/Contact'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <div class="main-container">
            <Route exact path="/" component={MainPage} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/portfolio" component={ProjectList} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;