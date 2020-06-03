import React from 'react';

class FilterByDimension extends React.Component{
    state = {
        dimension: ''
    }

    dimensionFilter = (place) => place.dimension.toUpperCase().includes(this.state.dimension.toUpperCase());

    updateFilter = (event) => {
        if (event.target.value === '') {
            this.removeFilter(event)
        } else {
            this.addFilter(event);
        }
    }

    addFilter(event) {
        this.setState({
            [event.target.name]: event.target.value
        }, this.props.onAddFilter(this.dimensionFilter)
        );
    }

    removeFilter(event) {
        this.setState({
            [event.target.name]: event.target.value
        }, this.props.onRemoveFilter()
        );
    }

    render() {
        return (
            <div>
                <label>Dimension: </label>
                <input type="text" name="dimension" value={this.state.dimension} onChange={this.updateFilter}  />
            </div>
        )
    }

}

export default FilterByDimension;