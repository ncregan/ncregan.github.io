var map;

document.addEventListener("DOMContentLoaded", function () {
    initMap();
});

async function initMap()
{
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 39.1131, lng: -105.3588},
        zoomControl: false,
        gestureHandling: 'none'
    });

    map.addListener('click', function(event) {
        // Get the latitude and longitude of the click event
        var lat = event.latLng.lat();
        var lng = event.latLng.lng();

        let info = "Latitude: " + lat.toFixed(2) + ", Longitude: " + lng.toFixed(2) + ", average cost/acre: $10,000, factors: ___, ___, ___"
        
        document.getElementById('info').innerHTML = info;
      });
}
