// src/App.js
import React from 'react';
import TemperatureGraph from './components/TemperatureGraph';
import Map from './components/Map';
import LatestData from './components/LatestData';

const App = () => {
    return (
        <div>
            <h1>Bag Data Dashboard</h1>
            <LatestData />
            <TemperatureGraph />
            <Map />
        </div>
    );
};

export default App;
