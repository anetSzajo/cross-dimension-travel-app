import React from 'react';
import Place from './Place';

class PlaceList extends React.Component {
    render() {
        let {placeListDetails} = this.props;
        return (
            <div>
                {placeListDetails.map((place, index) => {
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
