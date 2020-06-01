import React from 'react';

import PlaceList from '../PlaceList/PlaceList';
import './dashboardPage.css';

class DashboardPage extends React.Component{

    state = {
        placeList : []
    }

    componentDidMount() {
        fetch('database.json')
        .then(response => response.json())
        .then(data => this.setState({
            placeList: data
        }))
    }

    render() {
        return(
            <div>
                <div className="filter-section">
                    <div className="filter-menu">
                        <p>Filter: </p>
                        <button className="filter-button">PRICE</button>
                        <button className="filter-button">GALACTIC</button>
                    </div>
                    <img src="dashboard-filter-image.png" alt="" className="filter-image" />
                </div>
                
                <PlaceList placeListDetails={this.state.placeList}/>
                <div className="go-home__section">
                    <img className="go-home-image" src="dashboard-go-home-image.png" alt="" />
                    <button className="go-home__button">GO HOME</button>
                </div>
                
            </div>
        );
    }
}

export default DashboardPage;