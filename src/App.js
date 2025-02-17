import React from 'react';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';

function App() {
  return (
    <div id="background" className='container'>
      <HeaderComponent content={"gwyn moon"}/>
      <HeaderComponent content={"developer"} fontSize={'30px'}/>
    </div>
  );
}

export default App;
