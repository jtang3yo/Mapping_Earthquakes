// Add console.log to check to see if our code is working.
// console.log("working");
// Create the map object with a center and zoom level.
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);
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
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });
    
    // Then we add our 'graymap' tile layer to the map.
    streets.addTo(map);

//var marker = L.marker([51.5, -0.09]).addTo(map);

// multiple markers: An array containing each city's location, state, and population
// let cities = [{
//     location: [40.7128, -74.0059],
//     city: "New York City",
//     state: "NY",
//     population: 8398748
//   },
//   {
//     location: [41.8781, -87.6298],
//     city: "Chicago",
//     state: "IL",
//     population: 2705994
//   },
//   {
//     location: [29.7604, -95.3698],
//     city: "Houston",
//     state: "TX",
//     population: 2325502
//   },
//   {
//     location: [34.0522, -118.2437],
//     city: "Los Angeles",
//     state: "CA",
//     population: 3990456
//   },
//   {
//     location: [33.4484, -112.0740],
//     city: "Phoenix",
//     state: "AZ",
//     population: 1660272
//   }];

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
