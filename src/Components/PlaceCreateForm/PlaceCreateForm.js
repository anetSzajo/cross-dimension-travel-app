import React from 'react';

import PlaceForm from "../PlaceForm/PlaceForm";
import './placeCreateForm.css';

class PlaceCreateForm extends React.Component{

    render(){
        const place = {
            name: 'naaame',
            type: '',
            dimension: '',
            price: '4441',
            residents: '',
            url: '',
            created: '',
        }
        return(
            <PlaceForm  place={place}/>
        )
    }
}

export default PlaceCreateForm;