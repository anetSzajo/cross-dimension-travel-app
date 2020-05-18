import React from 'react';



function Place(props) {

    return (
        <div className="place">
            Title: {props.title},
            Description: {props.description},
            Foto URL: {props.foto_url},
            Price: {props.price},
            City: {props.city},
            Category: {props.category},
            Address: {props.address}
        </div>
    )
}

export default Place;