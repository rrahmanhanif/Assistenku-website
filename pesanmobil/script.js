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

let pickupMarker = null;
let destinationMarker = null;

map.on('click', function(e){

if(!pickupMarker){

pickupMarker = L.marker(e.latlng)
.addTo(map)
.bindPopup("Titik Jemput")
.openPopup();

document.getElementById("pickup").innerText =
e.latlng.lat.toFixed(6) +
"," +
e.latlng.lng.toFixed(6);

}

else if(!destinationMarker){

destinationMarker = L.marker(e.latlng)
.addTo(map)
.bindPopup("Titik Tujuan")
.openPopup();

document.getElementById("destination").innerText =
e.latlng.lat.toFixed(6) +
"," +
e.latlng.lng.toFixed(6);

}

});

}

map.on('click', function(e){

if(!pickupMarker){

pickupMarker = L.marker(e.latlng)
.addTo(map)
.bindPopup("Titik Jemput")
.openPopup();

document.getElementById("pickup").innerText =
e.latlng.lat.toFixed(6) + "," +
e.latlng.lng.toFixed(6);

}

else if(!destinationMarker){

destinationMarker = L.marker(e.latlng)
.addTo(map)
.bindPopup("Titik Tujuan")
.openPopup();

document.getElementById("destination").innerText =
e.latlng.lat.toFixed(6) + "," +
e.latlng.lng.toFixed(6);

}

else{

map.removeLayer(pickupMarker);
map.removeLayer(destinationMarker);

pickupMarker = null;
destinationMarker = null;

document.getElementById("pickup").innerText =
"Belum dipilih";

document.getElementById("destination").innerText =
"Belum dipilih";

}

});
