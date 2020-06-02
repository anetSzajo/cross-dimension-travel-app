import React from 'react';
import { Link } from 'react-router-dom';

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