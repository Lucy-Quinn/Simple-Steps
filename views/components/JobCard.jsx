const React = require("react");

function JobCard(props) { //props = job document and isUserTypeCharity = boolean
  return (
    <div className="card-joblistings card">
      {/* Top of card */}
      <div className="card-top">
        <img src={props.foundJob.charity.photo} className="card-img-top" alt="charity logo" />
        <a href={`/private/charity-profile/${props.foundJob.charity._id}`} className="card-links card-text">{props.foundJob.charity.name}</a>
      </div>
      {/* Card body */}
      <div className="card-body">
        <h4 className="card-title">{props.foundJob.title}</h4>
        <p className="card-text">Start Date/Time: <span>{props.foundJob.date.toLocaleString('en-GB').slice(0, -3)}</span></p>

        <p className="card-text"><span>{props.foundJob.description}</span></p>

        {/* Volunteer list */}
        <p>Volunteers:
          {
            (props.foundJob.volunteers.map((oneVolunteer, i) => {
              return (
                //if 'volunteer' is null (i.e. volunteer does not exist/deleted) then return null, else return the volunteer link
                oneVolunteer.volunteer === null
                  ? null
                  : <span> <a key={i} href={`/private/volunteer-profile/${oneVolunteer.volunteer._id}`} className="card-links card-text">{oneVolunteer.volunteer.name}</a> </span>
              )
            }))
          }
        </p>

        {/* Join now button  */}
        <br />
        {/* If usertype === 'charity' do not show join button */}
        {props.userLoggedIn.userType === "charity" ? null : <a href={`/private/join-job/${props.foundJob._id}`} className="action-btn join-now-btn btn">Join Now</a>}

      </div>
    </div>
  );
};

module.exports = JobCard;
