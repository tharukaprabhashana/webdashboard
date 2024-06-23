// src/App.js
import React from 'react';
import TemperatureGraph from './components/TemperatureGraph';
import Map from './components/Map';
import LatestData from './components/LatestData';
import Navbar from './components/Navbar';


const App = () => {
    return (
        <div>
            <Navbar />
            <h1>Bag Data Dashboard</h1>
            <LatestData />
            <TemperatureGraph />
            <Map />
        </div>
    );
};

export default App;
