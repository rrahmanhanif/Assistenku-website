console.log("Ride Booking Assistenku Loaded");

document.addEventListener("DOMContentLoaded", function () {

  const mapElement = document.getElementById("map");

  if (!mapElement) {
    console.error("Element #map tidak ditemukan");
    return;
  }

  const pickupElement = document.getElementById("pickup");
  const destinationElement = document.getElementById("destination");

  const map = L.map("map").setView(
    [-6.2088, 106.8456],
    10
  );

  L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 19
    }
  ).addTo(map);

  let pickupMarker = null;
  let destinationMarker = null;

  map.on("click", function (e) {

    // Klik pertama = titik jemput
    if (!pickupMarker) {

      pickupMarker = L.marker(e.latlng)
        .addTo(map)
        .bindPopup("Titik Jemput")
        .openPopup();

      if (pickupElement) {
        pickupElement.innerText =
          e.latlng.lat.toFixed(6) +
          "," +
          e.latlng.lng.toFixed(6);
      }

      return;
    }

    // Klik kedua = titik tujuan
    if (!destinationMarker) {

      destinationMarker = L.marker(e.latlng)
        .addTo(map)
        .bindPopup("Titik Tujuan")
        .openPopup();

      if (destinationElement) {
        destinationElement.innerText =
          e.latlng.lat.toFixed(6) +
          "," +
          e.latlng.lng.toFixed(6);
      }

      return;
    }

    // Klik ketiga = reset
    map.removeLayer(pickupMarker);
    map.removeLayer(destinationMarker);

    pickupMarker = null;
    destinationMarker = null;

    if (pickupElement) {
      pickupElement.innerText = "Belum dipilih";
    }

    if (destinationElement) {
      destinationElement.innerText = "Belum dipilih";
    }

  });

  // Fix render map pada mobile browser
  setTimeout(function () {
    map.invalidateSize();
  }, 500);

});
