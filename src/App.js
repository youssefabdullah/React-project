import React from 'react';
import './App.css';

//import GridMob from'./Component/GridMob'
import Footer from "./Component/Footer/Footer"
import Slider from "./Component/Slider/Slider"
import Navbar from './Component/Nav/Navbar'
import Cards from './Component/Card/Cards'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
