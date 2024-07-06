// src/App.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TemperatureGraph from './components/TemperatureGraph';
import Map from './components/Map';
import LatestData from './components/LatestData';
import Navbar from './components/Navbar';
import './App.css'

import { useContext } from 'react';
import { AuthContext } from './AuthContext';

const App = () => {
    const { isLogin, setIsLogin } = useContext(AuthContext);
    const navigator = useNavigate();
    useState(()=> {
        console.log("useefect")
        navigator("/SignIn");
    },[isLogin, navigator])
    return (
        <div className="App">
        <div>
            <div>{isLogin ? "logged" : "not logged"}</div>
            <div><Navbar /></div>
            <div><Map /></div>
            <div><TemperatureGraph /></div>
            <div><LatestData /></div>  
            
        </div>
        </div>
    );
};

export default App;