import React from 'react';
import './App.css';
import Navbar from './Component/Nav/Navbar'
//import GridMob from'./Component/GridMob'
import Footer from "./Component/Footer/Footer"
import Slider from "./Component/Slider/Slider"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Footer/>
    </div>
  );
}

export default App;
