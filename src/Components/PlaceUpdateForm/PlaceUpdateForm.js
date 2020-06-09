import React from "react";

import PlaceForm from "../PlaceForm/PlaceForm";

class PlaceUpdateForm extends React.Component {

    state = {
        place: undefined,
    }

    componentDidMount() {
        const placeId = this.props.match.params.id;
        fetch('../../database.json')

            .then(response => response.json())
            .then(data => this.setState({
                place: data.filter(place => ''+place.id === placeId)[0]
            }))



    }

    render(){
        const place = this.state.place;
        if (place) {
            return <PlaceForm  place={place}/>
        } else {
            return <div>Loading place...</div>
        }

    }
}

export default PlaceUpdateForm;