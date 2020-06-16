import React from 'react'

import Place from "./Place";
import axios from "axios";

export default class PlaceById extends React.Component {
    state = {
        placeById: {}
    }

    componentDidMount() {
        const placeId = this.props.match.params.placeid;

        axios.get('http://localhost:5000/places')
            .then(res => this.setState({
                placeById: res.data.filter(place => ''+place.id === placeId)[0]
            }))
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        if (this.state.placeById === undefined){
            return (
                <h2>Place not found. Please enter correct place ID.</h2>
            )
        }
        else {
            return (
                <div>
                    <h1>Place with ID #{this.props.match.params.placeid}</h1>
                    <Place id={ this.state.placeById.id } name={this.state.placeById.name} type={this.state.placeById.type} dimension={this.state.placeById.dimension} price={this.state.placeById.price} url={this.state.placeById.url} created={this.state.placeById.created} />
                </div>
            )
        }
    }
}

