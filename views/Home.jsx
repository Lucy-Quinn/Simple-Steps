const React = require("react");
const Layout = require("./Layout");
const JobCardHomePage = require("./components/JobCardHomePage");


function Home(props) {
  return (
    <Layout title="Home Page" isLoggedIn={false}>

      <div>
        <div className="header">
          <div className="header-img"></div>
          <div className="header-title">
            <h1>Taking Simple Steps to Making The World a Better Place</h1>
          </div>
          <div className="buttons-header">
            <div className="btn-header btn btn-light">
              <a href="/auth/signup/volunteer">
                <h3>I'm a Volunteer</h3>
                <p>Find opportunities</p>
              </a>
            </div>
            <div className="btn-header btn btn-light">
              <a href="/auth/signup/charity">
                <h3>I'm a Charity</h3>
                <p>Find volunteers</p>
              </a>
            </div>
          </div>
        </div>
        <section id="steps-section">
          <h2>Get Involved</h2>
          <div className="steps">
            <div className="step-card">
              <h3>Join</h3>
              <p>Take a simple step, sign up and create your great profile.</p>
            </div>
            <div className="step-card">
              <h3>Explore</h3>
              <p>Browse the charities or volunteer projects in your area</p>
            </div>
            <div className="step-card">
              <h3>Connect</h3>
              <p>Join a volunteer job and help your community. Make a difference!</p>
            </div>
            <div className="step-card">
              <h3>Create Change</h3>
              <p>98% of charities say they found amazing volunteers through our website</p>
            </div>
          </div>
        </section>

        <section id="carousel-section">
          <h2>Volunteer Projects Near You</h2>
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="carousel-row">
                  <JobCardHomePage foundJob={props.foundJobs[0]}></JobCardHomePage>
                  {/* <JobCardHomePage foundJob={props.foundJobs[0]}></JobCardHomePage>
                  <JobCardHomePage foundJob={props.foundJobs[0]}></JobCardHomePage> */}
                </div>
              </div>


              <div className="carousel-item">
                <div className="carousel-row">

                  <JobCardHomePage foundJob={props.foundJobs[1]} ></JobCardHomePage>
                  {/* <JobCardHomePage foundJob={props.foundJobs[0]} ></JobCardHomePage>
                  <JobCardHomePage foundJob={props.foundJobs[0]} ></JobCardHomePage> */}
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-row">

                  <JobCardHomePage foundJob={props.foundJobs[2]}></JobCardHomePage>
                  {/* <JobCardHomePage foundJob={props.foundJobs[0]}></JobCardHomePage>
                  <JobCardHomePage foundJob={props.foundJobs[0]}></JobCardHomePage> */}
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
        </section>

      </div>



      {/* The numbers  ******************/}
    </Layout>
  );
}

module.exports = Home;

