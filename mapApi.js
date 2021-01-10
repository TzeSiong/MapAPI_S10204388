
$(document).ready(function () {
  
  var startLat;
  var startLon;
  var endLat;
  var endLon;

  mapboxgl.accessToken = 'pk.eyJ1IjoidHplc2lvbmciLCJhIjoiY2tqam4wMGdiMDAwczJ6cDRlNW1iNHNvZyJ9.0jsDVBgabkXN2zJNpl1mMA';
  var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [103.855451, 1.2992724999999998],
  zoom: 13
  });
  
  let geofinder = 
  new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl,
  placeholder: "Search destination"
  })

  map.addControl(geofinder)

  geofinder.on('result', function(destination){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      navigator.geolocation.getCurrentPosition(logPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }


    setTimeout(function(){
      console.log(destination)
      endLat = destination.result.center[1];
      endLon = destination.result.center[0];
      let endPos = [endLon, endLat];
      console.log(endPos);

      var url = `https://api.mapbox.com/directions/v5/mapbox/driving/${startLon},${startLat};${endLon},${endLat}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`;
      fetch(url)
      .then(response => response.json())
      .then(function (result){
        console.log(result);
        var distance = result.routes[0].distance;
        var duration = result.routes[0].duration;
        var destination_name = destination.result.text + " " + destination.result.properties.address;
        console.log(destination_name);
        distance = (distance / 1000).toFixed(2);
        duration = (duration / 60).toFixed(2);
        $('#distanceText').text(`Driving Distance: ${distance} km(s)`)
        $('#durationText').text(`Approximate Duration: ${duration} min(s)`)
        $('#destination').text(`Name: ${destination_name}`)
        console.log(distance);

        




      })


    }, 500)



  })

  let geolocate =
  new mapboxgl.GeolocateControl({
  positionOptions: {
  enableHighAccuracy: true
  },
  trackUserLocation: true
  })

  map.addControl(geolocate)

  var x = document.getElementById("coords");

 

  function showPosition(position) {
      x.innerHTML = "Latitude: " + position.coords.latitude + 
      "<br>Longitude: " + position.coords.longitude;
    }

  function logPosition(position){
      startLon = position.coords.longitude;
      startLat = position.coords.latitude;
      let currentPosition = [startLat, startLon];
      console.log(currentPosition);
      }


  });