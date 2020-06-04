function betweenRange(from, to) {
    return (place) => {
        return place.price > from && place.price < to
    }
}

export default betweenRange;