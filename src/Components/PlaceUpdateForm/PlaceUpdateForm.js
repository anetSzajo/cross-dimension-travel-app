import React from "react";

import PlaceCreateForm from "../PlaceCreateForm/PlaceCreateForm";

class PlaceUpdateForm extends React.Component {

    state = {
        placeById: {}
    }

    componentDidMount() {
        const placeId = this.props.match.params.placeid;

        fetch('../database.json')
            // .then(x => {console.log(x); return x})

            .then(response => response.json())
            .then(data => this.setState({
                placeById: data.filter(place => ''+place.id === placeId)[0]
            }))
    }

    render(){
        return(
            <PlaceCreateForm name={this.state.placeById.name} type={this.state.placeById.type} dimension={this.state.placeById.dimension} price={this.state.placeById.price} residents={[this.state.placeById.residents].length} url={this.state.placeById.url} created={this.state.placeById.created} />
        )
    }
}

export default PlaceUpdateForm;