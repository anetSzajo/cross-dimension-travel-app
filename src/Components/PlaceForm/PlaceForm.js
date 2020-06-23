import React from 'react';
import axios from 'axios';

import './placeForm.scss'

class PlaceForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            place: props.place ? props.place : this.defaultEmptyPlace()
        }
    }

    handleInputChange = (event) => {
        let state;
        let value = event.target.value;
        console.log(event.target);
        if (event.target.type === "number"){
            console.log("wezlo");
            state = {
                place: {
                    ...this.state.place,
                    [event.target.name]: +value
                }
            }
        } else {
            state = {
                place: {
                    ...this.state.place,
                    [event.target.name]: value
                }
            };
        }
        this.setState(
            state
        )
    }

    defaultEmptyPlace = () => ({name: '',
        type: '',
        dimension: '',
        price: 0,
        // residents: '',
        url: '',
        created: ''})

    handleSelectChange = (event) => {
        this.setState(
            {
                place: {
                    ...this.state.place,
                    type: event.target.value,
                }
            }
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const place = this.state.place;

        axios.post('http://localhost:5000/places',
            {...place},{ headers: { 'Content-Type': 'application/json' } } )
            .then(res => {
            console.log(res);
            console.log(place);
            })
    }

    render() {
        const {place} = this.state;

        return (
            <div>
                <h1>PLACE FORM</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>NAME:
                        <input type="text" name="name" value={place.name} onChange={this.handleInputChange}/>
                    </label>
                    <label>TYPE:
                        <select value={place.type} onChange={this.handleSelectChange}>
                            <option value="planet">Planet</option>
                            <option value="cluster">Cluster</option>
                            <option value="space station">Space station</option>
                            <option value="microverse">Microverse</option>
                            <option value="resort">Restort</option>
                            <option value="tv">TV</option>
                        </select>
                    </label>
                    <label>DIMENSION:
                        <input type="text" name="dimension" value={place.dimension}
                               onChange={this.handleInputChange}/>
                    </label>
                    <label>PRICE:
                        <input type="number" name="price" value={place.price} onChange={this.handleInputChange}/>
                    </label>
                    <label>URL:
                        <input type="text" name="url" value={place.url} onChange={this.handleInputChange}/>
                    </label>
                    <label>CREATED:
                        <input type="text" name="created" value={place.created} onChange={this.handleInputChange}/>
                    </label>
                    <div className="submit-btn--container">
                        <input type="submit" name="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default PlaceForm;