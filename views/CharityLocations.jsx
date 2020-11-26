const React = require('react');
const Layout = require('./Layout');


function CharityLocations(props) {
    return (
        <Layout title="Find Charities" isLoggedIn={true} userLoggedIn={props.userLoggedIn}>
            <section id="charity-location">
                <h1>Find Charities Near You!</h1>


                {/* <div id='map' style={{ width: "800px", height: "600px" }}></div> */}
                {/* <div id='map' style={{ width: "320px", height: "400px" }}></div> */}
                <div id='map' style={{ width: "100%", height: "100%" }}></div>


                {/* Mapbox scripts */}
                <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css' rel='stylesheet' />
                <script async defer src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.js'></script>
                <script async defer src="https://unpkg.com/axios/dist/axios.min.js"></script>
                <script src="/javascripts/mapbox.js"></script>
                <p>Click the popup on the map and you will find the link to the charity of your choice</p>
                <a className="action-btn btn" href="/private/job-listings">Job Listings</a>
            </section>
        </Layout>


    );
};

module.exports = CharityLocations;
