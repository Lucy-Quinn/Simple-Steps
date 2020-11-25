const React = require("react");

function JobCardHomePage(props) { //props = job document and isUserTypeCharity = boolean
    console.log(props.foundJob)
    return (
        <div className="home-page-card card">

            <div className="card-top">

                <img src={props.foundJob.charity.photo} className="card-img-top" alt="..." />
                <a href={'/auth/login'} className="card-text">{props.foundJob.charity.name}</a>
            </div>
            <div className="card-body">
                <h4 className="card-title">{props.foundJob.title}</h4>
        <p className="card-text">Start Date/Time: <span>{props.foundJob.date.toLocaleString().slice(0, -3)}</span></p>


                <p className="card-text">{props.foundJob.description}</p>
                {/* <p className="card-text">{props.foundJob.skillsRequired}</p> */}

                <br />
                <a href={`/auth/signup/volunteer`} className="action-btn join-now-btn btn btn-primary">Join Now</a>

            </div>
        </div>
    );
};

module.exports = JobCardHomePage;
