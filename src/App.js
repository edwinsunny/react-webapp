
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import {useEffect, useRef , useState} from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Tools from './pages/Tools';
import Weather from './pages/Weather';

import './components/Nav.css'


function App() {

  let ref = useRef(null);

  // useEffect(() => {
  //   console.log('className', ref.current.className);

  //   if (ref.current.classList.contains('my-class')) {
  //     console.log('Element contains class');
  //   } else {
  //     console.log('Element does NOT contain class');
  //   }
  // }, []);

  // const myFunction =() => {
  //   var x = ref.current.classList.contains("myTopnav");
  //   if (x.className === "topnav") {
  //     x.className += " responsive";
  //   } else {
  //     x.className = "topnav";
  //   }
  // }

  // const myFunction = ({event}) => {
  //   console.log('className', event.currentTarget.className);

  //   // 👇️ check if element contains class
  //   if (event.currentTarget.classList.contains('myTopnav')) {
  //     console.log('Element contains class');
  //   } else {
  //     console.log('Element does NOT contain class');
  //   }
  // };

  return (
    <div className="topnav" id="myTopnav">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/tools">Calculator</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
        </ul>
        {/* <a ref={ref} href="javascript:void(0);" className="icon" onClick={myFunction()}>
    <i class="fa fa-bars"></i>
  </a> */}
      </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/tools' element={<Tools />} />
      <Route path='/weather' element={<Weather />} />
    </Routes>

    </div>
  )

}

export default App;
