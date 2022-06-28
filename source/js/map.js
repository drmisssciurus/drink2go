const MARK_ADRESS = {
  lat: 59.968,
  lng: 30.317,
};

const LAT = 59.968;
const LNG = 30.317;

const ZOOM_MAP = 10;

const map = L.map('map-canvas').setView([59.968440, 30.317510], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/icons/map-pin.svg',
  iconSize: [38, 44],
  iconAnchor: [5, 76],
});

const mainPinMarker = L.marker(
  MARK_ADRESS,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);
