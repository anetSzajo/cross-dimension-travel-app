import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

// import AboutApp from '../AboutApp/AboutApp';
// import DashboardPage from '../DashboardPage/DashboardPage';

import './welcomePage.css';

function WelcomePage() {
    return (
        <div className="home-page">
            <div className="welcome-panel">
                <h1>CROSS-DIMENSIONAL RICK SANCHEZ TRAVEL APP</h1>
                <div>
                    <ul>
                        <button className="travel-button"><Link to="/dashboard" className="travel-button__link">TRAVEL</Link></button>
                        <Link to="/aboutApp"><button>About App</button></Link>
                    </ul>
                </div>
            </div>
            <div>
                <img src="main-content-image.png" alt="" />
            </div>
        </div>
    )
}

export default WelcomePage;