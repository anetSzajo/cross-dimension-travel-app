import React from 'react';

import './welcomePage.css';

function WelcomePage() {
    return (
        <div className="home-page">
            <div className="welcome-panel">
                <h1>CROSS-DIMENSIONAL RICK SANCHEZ TRAVEL APP</h1>
                <button className="travel-button">TRAVEL</button>
            </div>
            <div>
                <img src="main-content-image.png" alt="" />
            </div>
        </div>
    )
}

export default WelcomePage;