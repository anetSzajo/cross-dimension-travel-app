import React from 'react';

import './placeCreateForm.css';

class PlaceCreateForm extends React.Component{
    state = {
        name: '',
        type: '',
        dimension: '',
        price: '',
        residents: '',
        url: '',
        created: ''
    }

    handleInputChange = (event) => {
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }

    handleSelectChange = (event) => {
        this.setState(
            {
                type: event.target.value
            }
        )
    }

    handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();

    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>NAME:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange}/>
                    </label>
                    <label>TYPE:
                        <select value={this.state.type} onChange={this.handleSelectChange}>
                            <option value="planet">Planet</option>
                            <option value="cluster">Cluster</option>
                            <option value="space station">Space station</option>
                            <option value="microverse">Microverse</option>
                            <option value="resort">Restort</option>
                            <option value="tv">TV</option>
                        </select>
                    </label>
                    <label>DIMENSION:
                        <input type="text" name="dimension" value={this.state.dimension} onChange={this.handleInputChange}/>
                    </label>
                    <label>PRICE:
                        <input type="number" name="price" value={this.state.price} onChange={this.handleInputChange}/>
                    </label>
                    <label>RESIDENTS:
                        <input type="text" name="residents" value={this.state.residents} onChange={this.handleInputChange}/>
                    </label>
                    <label>URL:
                        <input type="text" name="url" value={this.state.url} onChange={this.handleInputChange}/>
                    </label>
                    <label>CREATED:
                        <input type="text" name="created" value={this.state.created} onChange={this.handleInputChange}/>
                    </label>
                    <input type="submit" name="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default PlaceCreateForm;