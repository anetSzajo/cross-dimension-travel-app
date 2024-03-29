import React from 'react';

import {betweenRange} from '../FilteringFunctions';
import './filterByPrice.scss';

class FilterByPrice extends React.Component {

    state = {
        filterToggled: false,
        from: '',
        to: ''
    }


    betweenPriceFilter = (from, to) => {
        return {
            filterName: 'FilterByPrice', filterFunction: betweenRange(from, to)
        }
    }

    toggleFilter = (event) => {
        this.setState({
            filterToggled: event.target.checked
        }, () => {
            if (this.state.filterToggled) {
                this.props.onAddFilter(this.betweenPriceFilter(this.state.from, this.state.to))
            } else {
                this.props.onRemoveFilter(this.betweenPriceFilter(this.state.from, this.state.to))
            }
        })
    }

    handlePriceChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            if (this.state.filterToggled) {
                this.props.onAddFilter(this.betweenPriceFilter(this.state.from, this.state.to))

            }
        })
    }

    render() {
        return (
            <div className="price-filters">
                <input type="checkbox" name="filterToggled" checked={this.state.filterToggled}
                       onChange={this.toggleFilter}/>
                <label className="filter-label">From: </label>
                <input type="text" name="from" value={this.state.from} onChange={this.handlePriceChange} className="filter-price-input" />
                <label className="filter-label">To: </label>
                <input type="text" name="to" value={this.state.to} onChange={this.handlePriceChange} className="filter-price-input" />
            </div>

        )
    }
}


export default FilterByPrice;
