import React from 'react';

import './filterByPrice.css';

class FilterByPrice extends React.Component {

    state = {
        filterToggled: false,
        from: '',
        to: ''
    }

    betweenPriceFilter = (place) => place.price > this.state.from && place.price < this.state.to


    toggleFilter = (event) => {
        this.setState({
            filterToggled: event.target.checked
        }, this.updateFilter(event))
    }

    handlePriceChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

// jest zresetujesz jedno pole, a drugie jest uzupelnione to tak usunie wszystkie filtery
// jak dasz spacje to filtruje niepotrzebnie
// trzeba dodac opcję żeby przy removeFilter informował jaki to jest filtr, zeby go mógł usunąć parent
    updateFilter = (event) => {
        if (event.target.checked === false) {
            this.removeFilter()
        } else {
            this.addFilter()
        }
    }

    addFilter() {
        this.props.onAddFilter(this.betweenPriceFilter)
    }

    removeFilter() {
        this.props.onRemoveFilter(this.betweenPriceFilter)
    }


    render() {
        return (
            <div className="price-filters">
                <input type="checkbox" name="filterToggled" checked={this.state.filterToggled} onChange={this.toggleFilter} />
                <label>From: </label>
                <input type="text" name="from" value={this.state.from} onChange={this.handlePriceChange} />
                <label>To: </label>
                <input type="text" name="to" value={this.state.to} onChange={this.handlePriceChange} />
            </div>

        )
    }

}


export default FilterByPrice;