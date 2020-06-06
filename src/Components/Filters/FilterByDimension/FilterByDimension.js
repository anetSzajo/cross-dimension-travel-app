import React from 'react';

import {byDimension} from '../FilteringFunctions.js';
import './filterByDimension.css';

class FilterByDimension extends React.Component{
    state = {
        filterToggled: false,
        dimension: ''
    }

    betweenDimensionFilter = (dimension) => {
        return {
            filterName: 'FilterByDimension', filterFunction: byDimension(dimension)
        }
    }

    toggleFilter = (event) => {
        this.setState({
            filterToggled: event.target.checked
        }, () => {
            if (this.state.filterToggled) {
                this.props.onAddFilter(this.betweenDimensionFilter(this.state.dimension))
            } else {
                this.props.onRemoveFilter(this.betweenDimensionFilter(this.state.dimension))
            }
        })
    }

    handleDimensionChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            if (this.state.filterToggled) {
                this.props.onAddFilter(this.betweenDimensionFilter(this.state.dimension))
            }
        })
    }

    render() {
        return (
            <div className="dimension-filter">
                <input type="checkbox" name="filterToggled" checked={this.state.filterToggled} onChange={this.toggleFilter} />
                <label>Dimension: </label>
                <input type="text" name="dimension" value={this.state.dimension} onChange={this.handleDimensionChange}  />
            </div>
        )
    }

}

export default FilterByDimension;