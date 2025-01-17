import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Future from './components/Future';
import Partners from './components/Partners';
import AWSGulf from './components/AWS-Gulf';
import Services from './components/Services';
import SlickSlider from './components/Slick-Slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Future />
      <Partners />
      <AWSGulf/>
      <Services />
      <SlickSlider/> 
    </div>
  );
}

export default App;
