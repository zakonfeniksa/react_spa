import React, { Component } from 'react';
import {Route,
NavLink,
HashRouter} from 'react-router-dom';
import Home from '../Home/Home.js';
import Stuff from '../Stuff/Stuff.js';
import Contact from '../Contact/Contact.js';
import './Main.css';

class Main extends Component{
  render(){
    return(
      <HashRouter>
      <div>
        <h1>Prosta aplikacja jednostronowa</h1>
        <ul className="header">
          <li><Navlink to="/">Strona główna</Navlink></li>
          <li><NavLink to="/">O nas</NavLink></li>
          <li><NavLink to="/">Kontakt</NavLink></li>
        </ul>
        <div className="content">
          <Route path="/" component={Home}/>
          <Route path="/stuff" component={Stuff}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default Main;
