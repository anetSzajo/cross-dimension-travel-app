function betweenRange(from, to) {
    return (place) => {
        return place.price > from && place.price < to
    }
}

function betweenDimension(dimension) {
    return (place) => {
        return place.dimension.toUpperCase().includes(dimension.toUpperCase());
    }
}

export {betweenRange, betweenDimension}
