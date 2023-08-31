const copy = "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors";
const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const layer = L.tileLayer(url, { attribution: copy });
const map = L.map("map", { layers: [layer], minZoom: 10 });
const redIcon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  // specify the path here
  iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png"
});

map.setView([53.349805, -6.26031], 15); // [Latitude, Longitude], Zoom Levels
map.locate()
    .on("locationfound", (e) => {
        map.setView(e.latlng, 15); // Set the view to the user's location
        L.marker(e.latlng, { icon: redIcon }).addTo(map); // Add red marker at user's location
        render_cafe(); // Render nearby cafes
    })
    .on("locationerror", () => {
        map.setView([0, 0], 20); // If location error, set view to default
    });
    // .on("locationfound", (e) => map.setView(e.latlng, 8))
    // .on("locationerror", () => map.setView([0, 0], 20));


async function load_cafes() {
    const cafe_url = `/api/cafes/?in_bbox=${map.getBounds().toBBoxString()}`;
    const response = await fetch(cafe_url);
    const geojson = await response.json();

    // Calculate the distances and sort by distance
    const userLocation = map.getCenter();
    geojson.features.forEach(feature => {
        const cafeLocation = L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);
        const distance = userLocation.distanceTo(cafeLocation);
        feature.properties.distance = distance;
    });

    // Sort features by distance
    geojson.features.sort((a, b) => a.properties.distance - b.properties.distance);

    // Limit to the nearest ten cafes
    const nearestCafes = geojson.features.slice(0, 10);

    return {
        type: "FeatureCollection",
        features: nearestCafes
    };
}

async function render_cafe() {
    const cafes = await load_cafes();
    L.geoJSON(cafes)
        .bindPopup((layer) => {
            const distance = layer.feature.properties.distance.toFixed(2); // Format distance to two decimal places
            return `${layer.feature.properties.name}<br>Distance: ${distance} meters`;
        })
        .addTo(map);
}


map.on("moveend", render_cafe);
