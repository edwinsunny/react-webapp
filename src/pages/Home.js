// import logo from './logo.svg';
// import './App.css';
// import Tools from './Tools'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import Tools from "./Tools";
import '../pages/Home.css';
import React, {img} from "react";

function Home() {
  return (
    <div className="home">
      <h1 >Home</h1>
      <p>Welcome to My React Web Application </p>
      <section className="sec">

      <Link to="/tools">
      <img src={require('../assets/calulator-hand-760.jpg')}></img>
      Calculator</Link>
      </section>
      <section className="sec">

      <Link to="/weather">

      <img src={require('../assets/360_F_266381525_alVrbw15u5EjhIpoqqa1eI5ghSf7hpz7.jpg')}></img>
      Weather
      </Link>
      </section>

</div>
  );
}

export default Home;
