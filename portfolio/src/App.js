import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, HashRouter } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import MainPage from './components/layout/MainPage'
import About from './components/layout/About'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div class="main-container">
            <MainPage />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;