import React, { Component } from 'react';
import './Main.css';

class Main extends Component{
  render(){
    return(
      <div>
        <h1>Prosta aplikacja jednostronowa</h1>
        <ul className="header">
          <li><a href="/">Strona główna</a></li>
          <li><a href="/">O nas</a></li>
          <li><a href="/contact">Kontakt</a></li>
        </ul>
        <div className="content">

        </div>
      </div>
    );
  }
}

export default Main;
