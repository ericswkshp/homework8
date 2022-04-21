import React, { Component } from "react";
import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Commencal from "./Commencal";
import Trek from "./Trek";
import Specialized from "./Specialized";


class Main extends Component {
  render () {
    return (
      <HashRouter>
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><NavLink to="/">Commencal</NavLink></li>
          <li><NavLink to="./Trek">Trek</NavLink></li>
          <li><NavLink to="./Specialized">Specialized</NavLink></li>
        </ul>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Commencal />}></Route>
          <Route path="/Trek" element={<Trek />}></Route>
          <Route path="/Specialized" element={<Specialized />}></Route>
        </Routes>
      </div>
    </div>
    </HashRouter>
    );
  }
}

export default Main;