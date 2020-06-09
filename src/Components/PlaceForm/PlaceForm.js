import React from 'react';

class PlaceForm extends React.Component {

    constructor(props) {
        super(props);

        console.log(props)
        if (!props.place) {
            this.state = {
                place: {
                    name: '',
                    type: '',
                    dimension: '',
                    price: '',
                    residents: '',
                    url: '',
                    created: '',
                }
            }

        } else {
            this.state = {
                place: props.place
            }
        }


    }




    handleInputChange = (event) => {
        this.setState(
            {
                place: {
                    [event.target.name]: event.target.value
                }

            }
        )
    }

    handleSelectChange = (event) => {
        this.setState(
            {
                place: {
                    type: event.target.value

                }
            }
        )
    }

    handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        const {place} = this.state;
        return (
            <div>
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
                    <label>RESIDENTS:
                        <input type="text" name="residents" value={place.residents}
                               onChange={this.handleInputChange}/>
                    </label>
                    <label>URL:
                        <input type="text" name="url" value={place.url} onChange={this.handleInputChange}/>
                    </label>
                    <label>CREATED:
                        <input type="text" name="created" value={place.created} onChange={this.handleInputChange}/>
                    </label>
                    <input type="submit" name="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default PlaceForm;