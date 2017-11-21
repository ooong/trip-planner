const mapboxgl = require('mapbox-gl');

const iconURLS = {
    activity: 'http://i.imgur.com/WbMOfMl.png',
    hotel: 'http://i.imgur.com/D9574Cu.png',
    restaurant: 'http://i.imgur.com/cqR6pUI.png'
}


function buildMarker(markerType, coordArr) {
    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = `url(${iconURLS[markerType]})`
    return new mapboxgl.Marker(markerDomEl).setLngLat(coordArr);
   
}


// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);

module.exports = buildMarker;