import React from 'react';

class FilterByPrice extends React.Component {

    state = {
        from: '',
        to: ''
    }

    betweenPriceFilter = (place) => place.price > this.state.from && place.price < this.state.to


// jest zresetujesz jedno pole, a drugie jest uzupelnione to tak usunie wszystkie filtery
// jak dasz spacje to filtruje niepotrzebnie
// trzeba dodac opcję żeby przy removeFilter informował jaki to jest filtr, zeby go mógł usunąć parent
    updateFilter = (event) => {
        if (event.target.value === '') {
            this.removeFilter(event)
        } else {
            this.addFilter(event)
        }
    }

    addFilter(event) {
        this.setState({
            [event.target.name]: event.target.value
        }, this.props.onAddFilter(this.betweenPriceFilter)
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
                From:
                <input type="text" name="from" value={this.state.from} onChange={this.updateFilter} />
                To:
                <input type="text" name="to" value={this.state.to} onChange={this.updateFilter} />
            </div>

        )
    }

}


export default FilterByPrice;