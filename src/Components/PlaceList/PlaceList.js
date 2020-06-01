import React from 'react';
import Place from '../Place/Place';

import './placeList.css';


class PlaceList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            filteredDimension: '',
        };
        this.handleInput = this.handleInput.bind(this);

    }

    handleInput(event){
        this.setState(
            {
                filteredDimension: event.target.value,
            });
    }

    render() {
        let {placeListDetails} = this.props;
        return (
            <div className="placeList">
                <div>
                    <input type="text" value={this.state.filteredDimension} onChange={this.handleInput} />
                </div>

                {placeListDetails.filter(place =>
                this.state.filteredDimension ? place.city === this.state.filteredDimension : true
               ).map((place, index) => {
                    return <Place
                        key={`place-${index}`}
                        id={place.id}
                        name={place.name}
                        type={place.type}
                        dimension={place.dimension}
                        price={place.price}
                        residents={place.residents.length}
                        url={place.url}
                        created={place.created}
                        />
                    })}
            </div>
        )
    }
}

export default PlaceList;
