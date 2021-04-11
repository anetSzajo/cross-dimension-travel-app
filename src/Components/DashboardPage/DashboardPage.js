import React from 'react';
import axios from 'axios';

import FilterByDimension from '../Filters/FilterByDimension/FilterByDimension';
import FilterByPrice from '../Filters/FilterByPrice/FilterByPrice';
import {Link} from 'react-router-dom';
import PlaceList from '../PlaceList/PlaceList'
import './dashboardPage.scss';

class DashboardPage extends React.Component {

    defaultFilter = {filterName: 'default', filterFunction: () => true}

    state = {
        placeList: [],
        filterArray: [this.defaultFilter]
    }

    componentDidMount() {
    axios.get('places')
        .then(res => this.setState({
            placeList: res.data
        }))
        .catch(error => {
            console.log(error)
        })
    }

    addFilter = (filterToAdd) => {
        this.setState(
            {filterArray: [...this.state.filterArray.filter(f => f.filterName !== filterToAdd.filterName), filterToAdd]}
        )
    }

    removeFilter = (filterToRemove) => {
        this.setState(
            {filterArray: this.state.filterArray.filter(filter => filter.filterName !== filterToRemove.filterName)}
        )
    }


    filteredPlaceList = (filters) => {
        return this.state.placeList.filter(
            (place) => this.filterByAll(filters)(place)
        )
    }

    filterByAll(filters) {
        return (place) => {
            return filters.map(filter => {
                return filter.filterFunction(place)
            }).every(result => !!result)
        }
    }

    render() {
        return (
            <div>
                <div className="filter-menu">
                    <p>FILTERS</p>
                    <div className="filters">
                        <FilterByPrice onAddFilter={this.addFilter} onRemoveFilter={this.removeFilter}/>
                        <FilterByDimension onAddFilter={this.addFilter} onRemoveFilter={this.removeFilter}/>
                    </div>
                </div>
                <PlaceList placeListDetails={this.filteredPlaceList(this.state.filterArray)}/>
                <div className="go-home__section">
                    <button className="button travel-button"><Link to="/">GO HOME</Link></button>
                    <img className="go-home-image" src="dashboard-go-home-image.png" alt=""/>
                </div>

            </div>
        );
    }
}

export default DashboardPage;
