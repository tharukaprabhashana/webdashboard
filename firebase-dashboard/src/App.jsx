// src/App.js
import React from 'react';
import TemperatureGraph from './components/TemperatureGraph';
import Map from './components/Map';
import LatestData from './components/LatestData';
import Navbar from './components/Navbar';
import './App.css'

const App = () => {
    return (
        <div className="App">
        <div>
            <div><Navbar /></div>
            <div><Map /></div>
            <div><TemperatureGraph /></div>
            <div><LatestData /></div>  
            
        </div>
        </div>
    );
};

export default App;