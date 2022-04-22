
function twoCoordinates(start, end, type) {
     
    const lat2 = end.latitude
    const lon2 = end.longitude
    const lat1 = start.latitude
    const lon1 = start.longitude
    
    const radius = type ? getRadius(type) : 6371

    const startLatRad = radians(lat1)
    const endLatRad = radians(lat2)

    const lonDiffRad = radians(lon2 - lon1)

    const d = Math.acos((Math.sin(startLatRad) * Math.sin(endLatRad)) + (Math.cos(startLatRad) * Math.cos(endLatRad) * Math.cos(lonDiffRad)))

    return d * radius
}

function radians(nro) {
    return nro * Math.PI / 180
}

function getRadius(type) {
    if (type === 'km' || type === 'KM') { 
        return 6371 
    } else if (type === 'meter' || type === 'METER') { 
        return 6371000 
    } else if (type === 'mile' || type === 'MILE') {
        return 3958
    } else if (type === 'foot' || type === 'FOOT') {
        return 20902230
    } else if (type === 'yard' || type === 'YARD') {
        return 6967410
    }
}

function array(array, type) {
     
    const radius = type ? getRadius(type) : 6371
    let length = 0

    for(let i = 1; i < array.length; i++ ) {
        
        const startLatRad = radians(array[i - 1].latitude)
        const endLatRad = radians(array[i].latitude)
    
        const lonDiffRad = radians(array[i - 1].longitude - array[i].longitude)
    
        const d = Math.acos((Math.sin(startLatRad) * Math.sin(endLatRad)) + (Math.cos(startLatRad) * Math.cos(endLatRad) * Math.cos(lonDiffRad)))
    
        length = length + d * radius
    }
    
    return length
}

module.exports = {twoCoordinates, array}