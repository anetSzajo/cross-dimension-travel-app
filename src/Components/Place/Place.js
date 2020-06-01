import React from 'react';

import './place.css';

function Place(props) {

    return (
        <div className="place">
            <p>ID: {props.id}</p>
            <p>NAME: {props.name}</p>
            <p>TYPE: {props.type}</p>
            <p>DIMENSION: {props.dimension}</p>
            <p>PRICE: {props.price}</p>
            <p>RESIDENTS: {props.residents}</p>
            <p>URL: {props.url}</p>
            <p>CREATED: {props.created}</p>
        </div>
    )
}

export default Place;