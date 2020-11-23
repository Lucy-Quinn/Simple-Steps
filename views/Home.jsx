const React = require("react");
const Layout = require("./Layout");
const JobCardHomePage = require("./components/JobCardHomepage");


function Home(props) {
  return (
    <Layout title="Home Page" isLoggedIn={false}>

      <div>
        <div className="header-img">
          <div className="header-title">
            <h1>Taking Simple Steps to Making The World a Better Place</h1>
          </div>
          <div className="button-header">
            <button className="btn btn-info"> <a href="/auth/signup/volunteer">I want to volunteer: Find opportunities</a></button>
            <button className="btn btn-info"><a href="/auth/signup/charity">I'm a charity: Find volunteers</a></button>
          </div>
        </div>
        <section id="steps-section">
          <h1>Get Involved</h1>
          <div className="steps">
            <div className="step-card">
              <p>Step One: </p>
              <p>Sign up as a volunter or charity</p>
            </div>
            <div className="step-card">
              <p>Step Two: </p>
              <p>Sign up as a volunter or charity</p>
            </div>
            <div className="step-card">
              <p>Step Three: </p>
              <p>Sign up as a volunter or charity</p>
            </div>
            <div className="step-card">
              <p>Step Four: </p>
              <p>Sign up as a volunter or charity</p>
            </div>
          </div>


        </section>
        <h2>Volunteer Projects Near You:</h2>
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



      {/* The numbers  ******************/}
    </Layout>
  );
}

module.exports = Home;
