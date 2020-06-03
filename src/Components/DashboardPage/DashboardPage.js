import React from 'react';

import FilterByPrice from '../Filters/FilterByPrice/FilterByPrice';
import PlaceList from '../PlaceList/PlaceList';
import './dashboardPage.css';
import FilterByDimension from '../Filters/FilterByDimension/FilterByDimension';
import { isCompositeComponent } from 'react-dom/test-utils';

class DashboardPage extends React.Component {

    defaultFilter = () => true

    state = {
        placeList: [],
        filterArray: [this.defaultFilter]
    }

    addFilter = (filterToAdd) => {
        this.setState(
            { filterArray: [...this.state.filterArray, filterToAdd] }
        )
    }

    removeFilter = (filterToRemove) => {
        this.setState(
            { filterArray: this.state.filterArray.filter(f => f !== filterToRemove) }
        )
    }

    componentDidMount() {
        fetch('database.json')
            .then(response => response.json())
            .then(data => this.setState({
                placeList: data
            }))
    }

    filteredPlaceList = (filters) => {
        return this.state.placeList.filter(
            (place) => this.filterByAll(filters)(place)
        )

    }

    filterByAll(filters) {
        return (place) => {
            return filters.map(filter => filter(place))
                .every(result => !!result)
        }
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
                <PlaceList placeListDetails={this.filteredPlaceList(this.state.filterArray)} />
                <div className="go-home__section">
                    <img className="go-home-image" src="dashboard-go-home-image.png" alt="" />
                    <button className="go-home__button">GO HOME</button>
                </div>

            </div>
        );
    }
}

export default DashboardPage;
