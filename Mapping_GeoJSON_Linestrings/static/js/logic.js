// Add console.log to check to see if our code is working.
// console.log("working");
// Create the map object with a center and zoom level.
// Create the map object with center at the San Francisco airport.

//let map = L.map('mapid').setView([37.6213, -122.3790], 5);
// Create the map object with a center and zoom level.
let map = L.map("mapid", {
  center: [44.0, -80.0],
zoom: 2
});

// Create the map object with a center and zoom level.
// anothe way to create map object 
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });
//add map tile layers that will be the background of our map
// We create the tile layer that will be the background of our map.

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });

    // Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
    // adding url for external geojson file 
let airportData = "https://raw.githubusercontent.com/jtang3yo/Mapping_Earthquakes/main/majorAirports.json";
// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/jtang3yo/Mapping_Earthquakes/main/torontoRoutes.json";
        
// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};


// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

//let map = L.map('mapid', {
//   center: [30, 30],
//   zoom: 2,
//   layers: [streets]
// })


//Get data from cities.js add the script src in index.html
let cityData = cities; 
  // Loop through the cities array and create one marker for each city.
  // add the location of each city to the map when you iterate through the cities array. 
  //Inside the parentheses of the bindPopup() method, we'll retrieve the name of the city, state, and population.
cityData.forEach(function(city) {
    console.log(city)
    //L.marker(city.location) replaced with circleMarker()
    L.circleMarker(city.location,{
        radius: city.population/100000,
        color: "orange"
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString()+ "</h3>")
    .addTo(map);
   });

//map lines with leaflet, coorindates in array 
// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790]
  ];

 
// Create a polyline using the line coordinates and make the line red with plotline()
L.polyline(line, {
  color: "red"
}).addTo(map);

 // Coordinates for each point to be used in the polyline. 
 let line1 = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

  // Create a polyline using the line coordinates and make the line black.
L.polyline(line1, {
    color: "yellow"
 }).addTo(map);

 //skill drill 
 let line2 = [
    [33.9416, -118.4085], 
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
 ];

 L.polyline(line2, {
     color: "blue",
     weight: 4,
     dashArray: '10, 15',  
     fillOpacity: 0.5
 }).addTo(map);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport).addTo(map);

// Grabbing our GeoJSON data.
L.geoJson(sanFranAirport, {
  // We turn each feature into a marker on the map. 
  pointToLayer: function(feature, latlng) {
    console.log(feature);
    return L.marker(latlng)
    .bindPopup("<h2>" + feature.properties.city + "</h2>");
  }

}).addTo(map);

//onEarthFeature()
// L.geoJson(sanFranAirport, {
//   onEachFeauture: function(feature, layer){
//     console.log(layer),
//     layer.bindPopup()
//     .bindPopup("<h2>" + feature.properties.city + "</h2>")
//   }
// }).addTo(map);

// // Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data)
// .addTo(map);
// });

// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  style: myStyle,
  onEachFeature: function(feature, layer) {
    layer.bindPopup("<h3> Airline:" + feature.properties.airline + "</h3> <hr><h3> Destination:"
    + feature.properties.dst + "</h3>");
  }
}).addTo(map);
});