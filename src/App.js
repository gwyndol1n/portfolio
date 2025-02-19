import React from 'react';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import NavComponent from './components/nav/NavComponent';
import AboutComponent from './components/about/AboutComponent';
import ExperienceComponent from './components/experience/ExperienceComponent';

function App() {
  return (
    <div id="background" className='container'>
      <header>
        <HeaderComponent content={"gwyn moon"}/>
        <HeaderComponent content={"developer"} fontSize={'30px'}/>
      </header>
      <NavComponent />
      <AboutComponent />
      <ExperienceComponent />
    </div>
  );
}

export default App;
