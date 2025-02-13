const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoibHVjeWFxIiwiYSI6ImNraHRnY2MwNzA4a2wycHBobWc3NjA5d2gifQ.0e6yWmXZXeKEhKQ0fo76fg";

const main = () => {
  mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

  const map = new mapboxgl.Map({
    container: "map",
    center: [2.0787281, 41.3948976],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v11", //    /light-v10     /streets-v11     /satellite-v9
  });

  //if user allows you to share geolocation (their current location)
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var pos = [position.coords.longitude, position.coords.latitude];
        map.setCenter(pos);
      },
      () => alert("Issue retrieving your location")
    );
  } else {
    alert(" Your browser doesn't support Geolocation");
  }

  axios
    // .get("http://localhost:3000/api/charities")
    .get("https://simple-steps.onrender.com/api/charities")

    .then((result) => {
      result.data.forEach((charity) => {
        const charityPopup = `
                    <div class="map-popup">
                    <a class="popup-link" href="/private/charity-profile/${charity._id}" >${charity.name}</a>
                    <img class="popup-logo" src="${charity.photo}"/>
                    </div>
                `;
        new mapboxgl.Marker()
          .setLngLat(charity.location.coordinates.reverse())
          .setPopup(new mapboxgl.Popup().setHTML(charityPopup))
          .addTo(map);
      });
    })
    .catch((err) => console.error(err));
};

window.addEventListener("load", main);
