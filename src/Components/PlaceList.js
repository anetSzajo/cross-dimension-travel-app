import React from 'react';
import Place from './Place';

import './place.css';


class PlaceList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            filteredCity: '',
            filteredPrice: ''
        };
        this.handleInput = this.handleInput.bind(this);

    }

    handleInput(event){
        this.setState(
            {
                filteredCity: event.target.value,
                filteredPrice: event.target.value
            });
    }

    render() {
        let {placeListDetails} = this.props;
        return (
            <div className="placeList">
                <div>
                <label>Filter by City: </label>
                {/* {this.state.filteredCity} */}
                <input type="text" value={this.state.filteredCity} onChange={this.handleInput}/>
                </div>
                <div>
                <label>Filter by Price: </label>
                {/* {this.state.filteredPrice} */}
                <input type="text" value={this.state.filteredPrice} onChange={this.handleInput}/>
                </div>
                
                {placeListDetails.filter(place =>
                this.state.filteredCity ? place.city === this.state.filteredCity : true
               ).map((place, index) => {
                    return <Place
                        key={`place-${index}`}
                        title={place.title}
                        description={place.description}
                        foto_url={place.foto_url}
                        price={place.price}
                        city={place.city}
                        category={place.category}
                        address={place.address}
                    />}
                )}

                {placeListDetails.filter(place =>
                this.state.filteredPrice ? place.price === this.state.filteredPrice: true
               ).map((place, index) => {
                    return <Place
                        key={`place-${index}`}
                        title={place.title}
                        description={place.description}
                        foto_url={place.foto_url}
                        price={place.price}
                        city={place.city}
                        category={place.category}
                        address={place.address}
                    />}
                )}
            </div>
        )
    }
}

export default PlaceList;
