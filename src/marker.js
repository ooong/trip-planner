const mapbox = require('mapbox-gl');

const iconURLS = {
    activities: 'http://i.imgur.com/WbMOfMl.png',
    hotels: 'http://i.imgur.com/D9574Cu.png',
    restaurants: 'http://i.imgur.com/cqR6pUI.png'
}


// function buildMarker(markerType, coordArr) {
//     const createdMarker = document.createElement("div");
//     createdMarker.style.width = "32px";
//     createdMarker.style.height = "39px";
//     if (markerType === 'activity') {
//         markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
//     } else if (markerType === 'hotel') 
// }

function buildMarker(markerType, coordArr) {
    
}



new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);



module.exports = {buildMarker}