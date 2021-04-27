import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Bg from './Components/Background/Bg';
import About from './Components/About/About';
import Parallax from './Components/Parallax/Parallax';
import More from './Components/More/More';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Bg />
        <About />
        <Parallax />
        <More />
      </main>
      <Footer />
    </>
  );
};

export default App;
