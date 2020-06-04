import React from 'react';
import betweenRange from './Filter';

class FilterByPrice extends React.Component {

    state = {
        from: '',
        to: ''
    }


    betweenPriceFilter = (from, to) => {
        return {
            filterName: 'FilterByPrice', filter: betweenRange(from, to)
        }
    }

    // jest zresetujesz jedno pole, a drugie jest uzupelnione to tak usunie wszystkie filtery
    // jak dasz spacje to filtruje niepotrzebnie
    // trzeba dodac opcję żeby przy removeFilter informował jaki to jest filtr, zeby go mógł usunąć parent
    updateFilter = (event) => {
        console.log(this)
        if (event.target.value === '') {
            this.removeFilter(event)
        } else {
            this.addFilter(event)
        }
    }

    addFilter(event) {
        this.setState({
            [event.target.name]: event.target.value
        }, () => this.props.onAddFilter(this.betweenPriceFilter(this.state.from, this.state.to))
        );
    }

    removeFilter(event) {
        this.setState({
            [event.target.name]: event.target.value
        }, () => this.props.onRemoveFilter(this.betweenPriceFilter(this.state.from, this.state.to))
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