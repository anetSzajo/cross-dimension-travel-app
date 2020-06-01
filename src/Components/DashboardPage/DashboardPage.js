import React from 'react';

import PlaceList from '../PlaceList/PlaceList';
import './dashboardPage.css';

class DashboardPage extends React.Component{

    state = {
        placeList : []
    }

    componentDidMount() {
        fetch('./database.json')
        .then(response => response.json())
        .then(data => this.setState({
            placeList: data
        }))
    }

    render() {
        return(
            <div>
                <PlaceList placeListDetails={this.state.placeList}/>
            </div>
        );
    }
}

export default DashboardPage;