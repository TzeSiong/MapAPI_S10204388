
$(document).ready(function () {

    mapboxgl.accessToken = 'pk.eyJ1IjoidHplc2lvbmciLCJhIjoiY2tqam4wMGdiMDAwczJ6cDRlNW1iNHNvZyJ9.0jsDVBgabkXN2zJNpl1mMA';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-79.4512, 43.6568],
    zoom: 13
    });
     
    map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
    })
    );
    
  });