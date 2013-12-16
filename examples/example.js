function init() {
  var tileUrl = 'http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png';
  var tileOptions = {
    attribution: '&copy; MapQuest & <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    subdomains: '1234'
  };

  var map = new L.Map('map', {
    center: [50.0, 10.0],
    zoom: 5,
    layers: [
      L.tileLayer(tileUrl, tileOptions)
    ]
  });

  var magnifyingGlass = L.magnifyingGlass({
    zoomOffset: 3,
    layers: [
      L.tileLayer(tileUrl, tileOptions)
    ]
  });

  map.addLayer(magnifyingGlass);

  // make the glass disappear on click...
  magnifyingGlass.on('click', function() {
    map.removeLayer(magnifyingGlass);
  })

  // ...and reappear on right click
  map.on('contextmenu', function(mouseEvt) {
    if(map.hasLayer(magnifyingGlass)) {
      return;
    }
    map.addLayer(magnifyingGlass);
    magnifyingGlass.setLatLng(mouseEvt.latlng);
  });
}

window.onload = init;