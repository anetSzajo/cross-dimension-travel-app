import React from 'react';
import { Link } from 'react-router-dom';

import PlaceList from '../PlaceList/PlaceList';
import './dashboardPage.scss';

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
                    <button className="button travel-button"><Link to="/">GO HOME</Link></button>
                    <img className="go-home-image" src="dashboard-go-home-image.png" alt="" />
                </div>
            </div>
        );
    }
}

export default DashboardPage;