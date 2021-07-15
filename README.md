# Mapping Earthquakes Analysis 

## Overview of Project

  Basil and Sadhana like how you created your earthquake map with two different maps and the earthquake overlay. Now, Basil and       Sadhana would like to see the earthquake data in relation to the tectonic plates’ location on the earth, and they would like to see all the earthquakes with a magnitude greater than 4.5 on the map, and they would like to see the data on a third map.
  
  In this module, you will use the Leaflet.js Application Programming Interface (API) to populate a geographical map with GeoJSON earthquake data from a URL. Each earthquake will be visually represented by a circle and color, where a higher magnitude will have a larger diameter and will be darker in color. In addition, each earthquake will have a popup marker that, when clicked, will show the magnitude of the earthquake and the location of the earthquake.
  
  1. Deliverable 1: Add Tectonic Plate Data
  2. Deliverable 2: Add Major Earthquake Data
  3. Deliverable 3: Add an Additional Map

## Resources and Starter Codes

  1. Data Source: tectonic_plate_starter_logic.js, tectonic_plate_starter_logic.js, 
     tectonic_plate_starter_logic.js and index.html
  2. Data Tools: JavaScript, JSON, GeoJSON,Leaflet.js liabrary 
  3. Software: ES6+, ECMAScript and Visual Studio Code 1.50.0
  4. [The Mapbox API](https://docs.mapbox.com/)

## Preliminary Analysis 

  1. Tasks: To complete this project, use a URL for GeoJSON earthquake data from the USGS website and retrieve geographical coordinates and the magnitudes of earthquakes for the last seven days. Then add the data to a map.
  2. Approach: Your approach will be to use the JavaScript and the D3.js library to retrieve the coordinates and magnitudes of the earthquakes from the GeoJSON data. You'll use the Leaflet library to plot the data on a Mapbox map through an API request and create interactivity for the earthquake data.
  3. Use [leaflet quick start guide](https://leafletjs.com/examples/quick-start/) and "Preparing your page" section includes links and HTML code that we'll add to the index.html file. 
  4. Copy the L.tileLayer() code to logic.js file to create street-level map. 
 
## Deliverable 1 
  1. The tectonic plate data is added as a second layer group.
  2. The tectonic plate data is added to the overlay object.
  3. The d3.json() callback is working and does the following:
    * The tectonic plate data is passed to the geoJSON() layer
    * The geoJSON() layer adds color and width to the tectonic plate lines
    * The tectonic layer group variable is added to the map
  4. The earthquake data and tectonic plate data displayed on the map when the page loads.
 tectonic plate layer<img width="976" alt="tectonic plate layer" src="https://user-images.githubusercontent.com/82353749/125712298-b1356f78-73c0-4aa2-9df6-bafca5eaa63b.png">
Tectonic Plates<img width="1252" alt="Tectonic Plates" src="https://user-images.githubusercontent.com/82353749/125713243-fc1f2d5c-ec2c-4102-899f-8d163ee1de9e.png">

## Deliverable 2 
  1. The major earthquake data is added as a third layer group.
  2. The major earthquake data is added to the overlay object.
  3. The d3.json() callback is working and does the following:
    * Sets the color and diameter of each earthquake.
    api call for major earthquake data and create color function <img width="951" alt="api call for major earthquake data and create color function " src="https://user-images.githubusercontent.com/82353749/125712728-39c50330-0962-49ab-9dbb-f6ffdd27cb1f.png">
    * The major earthquake data is passed to the geoJSON() layer.
    * The geoJSON() layer creates a circle for each major earthquake, and adds a popup for each circle to display the magnitude and location of the earthquake
    circlemarker and popup<img width="776" alt="circlemarker and popup" src="https://user-images.githubusercontent.com/82353749/125712849-d420c3d1-e7ad-4b8c-b0a8-1159e8d00f6e.png">
    * The major earthquake layer group variable is added to the map
  4. All the earthquake data and tectonic plate data are displayed on the map when the page loads and the datasets can be toggled on or off.
  Major Earthquakes<img width="1254" alt="Major Earthquakes" src="https://user-images.githubusercontent.com/82353749/125713019-e104ad74-9b0e-4a5e-a0d1-cde14d6e07ab.png">
  
## Deliverable 3 
  1. Create a third tile layer, picked Navigation-Night. 
let navNight = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});
  2. The third map is added to the overlay object.
add 3rd map to overlay<img width="831" alt="add 3rd map to overlay" src="https://user-images.githubusercontent.com/82353749/125713524-b624bfbb-ab86-47a8-9f88-5b99a995d750.png">
  3. Navigation Night<img width="1256" alt="Navigation Night" src="https://user-images.githubusercontent.com/82353749/125713690-5982a567-3b32-45ee-9f03-3173da9d402b.png">






