import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Bg from './Components/Background/Bg';
import About from './Components/About/About';
import Parallax from './Components/Parallax/Parallax';

const App = () => {
  return (
    <>
      <Header />
      <Bg />
      <About />
      <Parallax />
    </>
  );
};

export default App;
