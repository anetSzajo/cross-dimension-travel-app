function betweenRange(from, to) {
    return (place) => {
        if (from === '' && to ==='') {
            return true;
        }
        if (from !== '' && to === '') {
            return place.price >= from
        }
        if (from === '' && to !== '') {
            return place.price <= to
        }
        else {
            return place.price >= from && place.price <= to
        }
    }
}

function byDimension(dimension) {
    return (place) => {
        if (dimension === undefined) {
            throw new Error('Dimension is undefined. Please pass string')
        }
        if (dimension === '') {
            return true;
        }
        else {
            return place.dimension.toUpperCase().includes(dimension.toUpperCase());
        }
    }
}

export {betweenRange, byDimension}
