
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Tools from './pages/Tools';
import Weather from './pages/Weather';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
    </Routes>
  )

}

export default App;
