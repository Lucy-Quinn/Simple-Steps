const React = require("react");

function JobCard(props) { //props = job document and isUserTypeCharity = boolean
  return (
    <div className="card">
      <img src={props.foundJob.charity.photo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.foundJob.title}</h5>
        {/* <p className="card-text">{props.foundJob.date.toLocaleString()}</p> */}
        <a href={`/private/charity-profile/${props.foundJob.charity._id}`} className="card-text">{props.foundJob.charity.name}</a>
        <p className="card-text">{props.foundJob.description}</p>
        <p className="card-text">{props.foundJob.skillsRequired}</p>
        {
          (props.foundJob.volunteers.map((oneVolunteer, i) => {
            return (
              //if 'volunteer' is null (i.e. volunteer does not exist/deleted) then return null, else return the volunteer link
              oneVolunteer.volunteer === null
                ? null
                : <a key={i} href={`/private/volunteer-profile/${oneVolunteer.volunteer._id}`} className="card-text">{oneVolunteer.volunteer.name}</a>
            )
          }))
        }

        <br />
        {/* If usertype === 'charity' do not show join button */}
        {props.userLoggedIn.userType === "charity" ? null : <a href={`/private/join-job/${props.foundJob._id}`} className="btn btn-primary">Join Now</a>}

      </div>
    </div>
  );
};

module.exports = JobCard;
