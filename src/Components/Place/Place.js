import React from 'react';

import './place.css';

function Place(props) {

    return (
        <div className="place">
            <p>Title: {props.title}</p>
            <p>Description: {props.description}</p>
            <p>Foto URL: {props.foto_url}</p>
            <p>Price: {props.price}</p>
            <p>City: {props.city}</p>
            <p>Category: {props.category}</p>
            <p>Address: {props.address}</p>
        </div>
    )
}

export default Place;