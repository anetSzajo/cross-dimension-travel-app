import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

// import AboutApp from '../AboutApp/AboutApp';
// import DashboardPage from '../DashboardPage/DashboardPage';

import './welcomePage.scss';

function WelcomePage() {
    return (
        <div className="home-page">
            <div className="welcome-panel">
                <h1>CROSS-DIMENSIONAL RICK SANCHEZ TRAVEL APP</h1>
                <div className="buttons-list">
                    <button className="button travel-button"><Link to="/dashboard">TRAVEL</Link></button>
                    <button className="button"><Link to="/aboutApp">ABOUT</Link></button>
                </div>
            </div>
            <div>
                <img src="main-content-image.png" alt="" />
            </div>
        </div>
    )
}

export default WelcomePage;