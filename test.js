mapboxgl.accessToken = 'pk.eyJ1Ijoia2VycmFzIiwiYSI6ImNreWI1b2lxeDBjOXQzMnBsM3RxdHh3aHMifQ.kxyXSGNVgR5E9UHvtIw4CA';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});