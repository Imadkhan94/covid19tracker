import React,{useState} from 'react';
import './App.css';
import Appbar from './components/appbar';
import Grids from './components/grid';
import Buttomnavigation from './components/button';

function App() {
  const screenConfig =useState(0);
  return (
    <div>
      <Appbar/>
      <Grids currentScreen={screenConfig[0]}/>
      <Buttomnavigation screenConfig={screenConfig}/>
    </div>
  );
}

export default App;
