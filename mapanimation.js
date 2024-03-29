// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];
  
// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1Ijoia2VycmFzIiwiYSI6ImNreWI1b2lxeDBjOXQzMnBsM3RxdHh3aHMifQ.kxyXSGNVgR5E9UHvtIw4CA';
  
// This is the map instance
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14,
});
  
// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
const marker = new mapboxgl.Marker()
    .setLngLat(busStops[0])
    .addTo(map);
// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
setTimeout(() => {
  marker.setLngLat(busStops[counter]);
  counter++;
  move();
  }
  ,1000);
  // Use counter to access bus stops in the array busStops

  // Make sure you call move() after you increment the counter.

}
move();

async function getBusLocations(){
  const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&fields[attributes]';
  const response = await fetch(url);
  const json = await response.json();
  
  console.log(json.data[0]);
  return json.data;
}
getBusLocations();

//function makeMarkers(json){
//  for(let {label: l, longitude: long, latitude: lat} of json.data){
//    let coords = [long, lat];
//    let busName = l;
//    console.log(coords);
//    let newMarker = new mapboxgl.Marker()
//    .setLngLat(coords)
//    .addTo(map);
//  }
//}