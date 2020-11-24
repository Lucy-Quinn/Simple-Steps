const React = require("react");

function JobCardHomePage(props) { //props = job document and isUserTypeCharity = boolean
    return (
        <div className="card">
            <img src={props.foundJob.charity.photo} className="card-img-top" alt="..." />

            <div className="card-body">
                <h5 className="card-title">{props.foundJob.title}</h5>
                <p className="card-text">{props.foundJob.date.toLocaleString().slice(0, -3)}</p>
                <a href={`/private/charity-profile/${props.foundJob.charity._id}`} className="card-text">{props.foundJob.charity.name}</a>
                <p className="card-text">{props.foundJob.description}</p>
                {/* <p className="card-text">{props.foundJob.skillsRequired}</p> */}
                {props.foundJob.volunteers.map((oneVolunteer, i) => {
                    return (
                        <a key={i} href={`/private/volunteer-profile/${oneVolunteer.volunteer._id}`} className="card-text">{oneVolunteer.volunteer.name}</a>
                    )
                })}

                <br />
                <a href={`/auth/signup/volunteer`} className="btn btn-primary">Join Now</a>

            </div>
        </div>
    );
};

module.exports = JobCardHomePage;
