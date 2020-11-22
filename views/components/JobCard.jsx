const React = require("react");

function JobCard(props) {

  console.log("props.isCharityProfilePage", props.isCharityProfilePage)

  return (
    <div className="card">

      {
        props.isCharityProfilePage
          ? <img src={props.charity.photo} className="card-img-top" alt="..." />
          : <img src={props.foundJob.charity.photo} className="card-img-top" alt="..." />
      }

      <div className="card-body">
        <h5 className="card-title">{props.foundJob.title}</h5>
        {/* <p className="card-text">{props.foundJob.date.toLocaleString()}</p> */}
        <a href={`/private/charity-profile/${props.foundJob.charity._id}`} className="card-text">{props.foundJob.charity.name}</a>
        <p className="card-text">{props.foundJob.description}</p>
        <p className="card-text">{props.foundJob.skillsRequired}</p>
        {props.foundJob.volunteers.map((oneVolunteer, i) => {
          return (
            <a key={i} href={`/private/volunteer-profile/${oneVolunteer.volunteer._id}`} className="card-text">{oneVolunteer.volunteer.name}</a>
          )
        })}

        <br />
        {props.isCharityProfilePage ? null : <a href="#" className="btn btn-primary">Join Now</a>}

      </div>
    </div>
  );
};

module.exports = JobCard;
