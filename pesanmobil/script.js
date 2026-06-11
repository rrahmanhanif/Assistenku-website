console.log("Ride Booking Assistenku Loaded");

if(document.getElementById('map')){

const map = L.map('map').setView(
[-6.2088,106.8456],
10
);

L.tileLayer(
'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
{
maxZoom:19
}
).addTo(map);

}
