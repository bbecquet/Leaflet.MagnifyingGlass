function init() {
  var tileUrl = 'http://b.tile.openstreetmap.org/{z}/{x}/{y}.png';
  var tileOptions = {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
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
    ],
    map: map,
    title: 'Magnifying glass'
  });
}

window.onload = init;
