const React = require('react');
const Layout = require('./Layout');


function CharityLocations(props) {
    return (
        <Layout title="Find Charities" isLoggedIn={true} userLoggedIn={props.userLoggedIn}>

            <h1>I am a location!!!</h1>


            <div id='map' style={{ width: "800px", height: "600px" }}></div>

            {/* Mapbox scripts */}
            <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css' rel='stylesheet' />
            <script async defer src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.js'></script>
            <script async defer src="https://unpkg.com/axios/dist/axios.min.js"></script>
            <script src="/javascripts/mapbox.js"></script>

        </Layout>


    );
};

module.exports = CharityLocations;
