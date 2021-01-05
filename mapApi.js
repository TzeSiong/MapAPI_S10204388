
$(document).ready(function () {

    mapboxgl.accessToken = 'pk.eyJ1IjoidHplc2lvbmciLCJhIjoiY2tqam4wMGdiMDAwczJ6cDRlNW1iNHNvZyJ9.0jsDVBgabkXN2zJNpl1mMA';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-79.4512, 43.6568],
    zoom: 13
    });
     
    let geofinder = 
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
    })

    map.addControl(geofinder)

    geofinder.on('geofinder', function(e){
        let findLon = e.coords.longitude;
        let findLat = e.coords.latitude
        let findPosition = [findLon, findLat];
        console.log(findPosition);
    })

    let geolocate =
    new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true
    })
    
    map.addControl(geolocate)

    geolocate.on('geolocate', function(e){
        let currentLon = e.coords.longitude;
        let currentLat = e.coords.latitude
        let currentPosition = [currentLon, currentLat];
        console.log(currentPosition);
    })

    
    
  });