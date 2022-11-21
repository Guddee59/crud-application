import React, { Component } from 'react';
import Banner from './Component/Banner';
import DailyTaskForm from './Component/DailyTaskForm';
import ShopHome from './Component/ShopHome';
import './Scss/style.css';

function App() {
    return (
        <div className="App">
            <Banner />
            <ShopHome />
            <DailyTaskForm />
        </div>
    );
}

export default App;
