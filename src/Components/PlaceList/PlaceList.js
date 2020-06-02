import React from 'react';
import Place from '../Place/Place';

import './placeList.css';


class PlaceList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filteredDimension: '',
            filteredPriceFrom: '',
            filteredPriceTo: ''
        };

    }

    render() {
        let { placeListDetails } = this.props;
        return (
            <div className="placeList">
                {placeListDetails.filter((place) => this.props.filterBy(place))
                    .map((place, index) => {
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
