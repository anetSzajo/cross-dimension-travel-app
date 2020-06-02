import React from 'react';

class FilterByPrice extends React.Component {

    state = {
        from: '',
        to: ''
    }

    constructor(props) {
        super(props)
        this.handlePriceChange = this.handleChange.bind(this);
    }

    createFilter() {
        return (place) => (place.price > this.state.from) && (place.price < this.state.to)
    }

    handlePriceChange = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value,
            }, () => this.props.onAddFilter(this.createFilter())
        );
    }


    render() {
        return (
            <div>
                From:
                <input type="text" name="from" value={this.state.filteredPriceFrom} onChange={this.handlePriceChange} />
                To:
                <input type="text" name="to" value={this.state.filteredPriceTo} onChange={this.handlePriceChange} />
            </div>

        )
    }

}


export default FilterByPrice;