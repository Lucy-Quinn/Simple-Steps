const React = require("react");
const Layout = require("./Layout");
const JobCardHomePage = require("./components/JobCardHomepage");


function Home(props) {
  return (
    <Layout title="Home Page" isLoggedIn={false}>

      <div>

        <button> <a href="/auth/signup/volunteer">To Volunteer</a></button>
        <button><a href="/auth/signup/charity">To Find Volunteers</a></button>
        <h1>Get Involved</h1>
        <p>Step One: </p>
        <p>Step Two</p>
        <p>Step Three</p>
        <p>Step Four</p>

        <h2>Current Roles:</h2>

        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-row">
                <JobCardHomePage foundJob={props.foundJobs[0]}></JobCardHomePage>
                <JobCardHomePage foundJob={props.foundJobs[0]}></JobCardHomePage>
                <JobCardHomePage foundJob={props.foundJobs[0]}></JobCardHomePage>
              </div>
            </div>


            <div className="carousel-item">
              <div className="carousel-row">

                <JobCardHomePage foundJob={props.foundJobs[0]} ></JobCardHomePage>
                <JobCardHomePage foundJob={props.foundJobs[0]} ></JobCardHomePage>
                <JobCardHomePage foundJob={props.foundJobs[0]} ></JobCardHomePage>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-row">

                <JobCardHomePage foundJob={props.foundJobs[0]}></JobCardHomePage>
                <JobCardHomePage foundJob={props.foundJobs[0]}></JobCardHomePage>
                <JobCardHomePage foundJob={props.foundJobs[0]}></JobCardHomePage>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Home;

