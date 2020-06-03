import React from 'react';

import FilterByPrice from '../Filters/FilterByPrice/FilterByPrice';
import PlaceList from '../PlaceList/PlaceList';
import './dashboardPage.css';
import FilterByDimension from '../Filters/FilterByDimension/FilterByDimension';

class DashboardPage extends React.Component {

    defaultFilter = () => true

    state = {
        placeList: [],
        filter: [this.defaultFilter]
    }

    addFilter = (newFilter) => {
        this.setState(
            { filter: [...this.state.filter, newFilter] }
        )
    }

    removeFilter = (filter) => {
        this.setState(
            { filter: this.state.filter.filter(f => f != filter) }
        )
    }

    componentDidMount() {
        fetch('database.json')
            .then(response => response.json())
            .then(data => this.setState({
                placeList: data
            }))
    }


    render() {
        return (
            <div>
                <div className="filter-section">
                    <div className="filter-menu">
                        <p>Filter: </p>
                        <FilterByPrice onAddFilter={this.addFilter} onRemoveFilter={this.removeFilter} />
                        <FilterByDimension onAddFilter={this.addFilter} onRemoveFilter={this.removeFilter} />
                        <button className="filter-button">PRICE</button>
                        <button className="filter-button">DIMENSION</button>
                    </div>
                    <img src="dashboard-filter-image.png" alt="" className="filter-image" />
                </div>
                <PlaceList placeListDetails={this.state.placeList} filterBy={this.state.filter} />
                <div className="go-home__section">
                    <img className="go-home-image" src="dashboard-go-home-image.png" alt="" />
                    <button className="go-home__button">GO HOME</button>
                </div>

            </div>
        );
    }
}

export default DashboardPage;