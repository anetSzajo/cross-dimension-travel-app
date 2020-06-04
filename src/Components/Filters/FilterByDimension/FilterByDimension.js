import React from 'react';

import './filterByDimension.css';

class FilterByDimension extends React.Component{
    state = {
        filterToggled: false,
        dimension: ''
    }

    dimensionFilter = (place) => place.dimension.toUpperCase().includes(this.state.dimension.toUpperCase());
 
    toggleFilter = (event) => {
        this.setState({
            filterToggled: event.target.checked
        }, this.updateFilter(event))
    }

    handleDimensionChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateFilter = (event) => {
        if (event.target.checked === false) {
            this.removeFilter()
        } else {
            this.addFilter();
        }
    }

    addFilter() {
        this.props.onAddFilter(this.dimensionFilter)
    }

    removeFilter() {
        this.props.onRemoveFilter(this.dimensionFilter)
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