var map = L.map("map", { minZoom: 2, maxZoom: 5 }).setView([0, 0], 2);

map.setMaxBounds(
  new L.LatLngBounds(new L.LatLng(-90, -180), new L.LatLng(90, 180))
);
map.invalidateSize();

var openStreetMap = L.tileLayer(
  "https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png"
  // {
  //   attribution:
  //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  // }
).addTo(map);

var blueIcon = new L.Icon({
  iconUrl:
    "./../icons/blue.png",
  shadowUrl:
    "./../icons/shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

var greenIcon = new L.Icon({
  iconUrl:
    "./../icons/green.png",
  shadowUrl:
    "./../icons/shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

var yellowIcon = new L.Icon({
  iconUrl:
    "./../icons/yellow.png",
  shadowUrl:
    "./../icons/shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

var redIcon = new L.Icon({
  iconUrl:
    "./../icons/red.png",
  shadowUrl:
    "./../icons/shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

var orangeIcon = new L.Icon({
  iconUrl:
    "./../icons/orange.png",
  shadowUrl:
    "./../icons/shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
