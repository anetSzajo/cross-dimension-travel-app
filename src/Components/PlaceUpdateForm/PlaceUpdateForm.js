import React from "react";

import PlaceForm from "../PlaceForm/PlaceForm";

class PlaceUpdateForm extends React.Component {

    state = {
        place: {},
    }

    componentDidMount() {
        const placeId = this.props.match.params.id;
        fetch('../../database.json')

            .then(response => response.json())
            // .then(x => {console.log(x); return x})
            .then(data => this.setState({
                place: data.filter(place => ''+place.id === placeId)[0]
            }))


    }

    render(){
        const {place} = this.state.place;
        console.log(this.state, 'Update form container')

        return(
                <PlaceForm place={place} />
        )
    }
}

export default PlaceUpdateForm;