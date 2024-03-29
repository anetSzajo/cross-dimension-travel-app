import React from 'react'

import Place from "./Place";
import axios from "axios";

export default class PlaceById extends React.Component {
    state = {
        placeById: {},
        isError: false
    }

    componentDidMount() {
        const placeId = this.props.match.params.placeid;

        axios.get(`places/${placeId}`)
            .then(res => this.setState({
                placeById: res.data
            }))
            .catch(error => {
                this.setState({isError: true});
                console.log(error)
            })
    }

    render() {
        if (this.state.isError === true){
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

