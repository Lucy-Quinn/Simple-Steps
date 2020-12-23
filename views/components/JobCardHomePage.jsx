const React = require("react");

function JobCardHomePage(props) { //props = job document and isUserTypeCharity = boolean
    function convertDateToString() {
        const day = props.foundJob.date.toDateString().split(" ").slice(0, 3).join(" ");
        let time = props.foundJob.date.toLocaleString().split("").slice(10).join("").split('');
        time.splice(3, 3);
        return time.join('') + " " + day;
    }
    return (
        <div className="home-page-card card">

            <div className="card-top">

                <img src={props.foundJob.charity.photo} className="card-img-top" alt="charity logo" />
                <a href={'/auth/login'} className="card-text">{props.foundJob.charity.name}</a>
            </div>
            <div className="card-body">
                <h4 className="card-title">{props.foundJob.title}</h4>
                <p className="card-text">Start Date/Time: <span>{convertDateToString()}</span></p>


                <p className="card-text">{props.foundJob.description}</p>
                {/* <p className="card-text">{props.foundJob.skillsRequired}</p> */}

                <br />
                <a href={`/auth/signup/volunteer`} className="action-btn join-now-btn btn">Join Now</a>

            </div>
        </div>
    );
};

module.exports = JobCardHomePage;
