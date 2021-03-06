const React = require("react");
const Layout = require("./Layout");

function VolunteerProfile(props) {
    return (
        <Layout title={`${props.volunteer.name}`} isLoggedIn={true} userLoggedIn={props.userLoggedIn}>
            <section className="profile">
                <div className="profile-info">
                    <h1>{props.volunteer.name}'s Profile</h1>
                    <img className="profile-img-volunteer" src={props.volunteer.photo} />
                    <div className="profile-details">
                        <p>Age:<span> {props.volunteer.age}</span></p>
                        <p>Skills: <span>{props.volunteer.skills}</span></p>
                        <p>About Me:</p>
                        <p><span>{props.volunteer.description}</span></p>
                    </div>
                    {
                        props.admin ? (
                            <a className="action-btn btn" href={`/private/volunteer-profile/edit/${props.volunteer._id}`}>Edit</a>
                        ) :
                            null
                    }
                </div>
                <div className="profile-job-cards">
                    {props.volunteer.jobsApplied.length === 0 ? (
                        <div className="no-jobs">
                            <h3>You have not joined any volunteer projects yet.</h3>
                            <p><span>Go out and get volunteering. <a className="card-links" href="/private/job-listings">Click here</a></span></p>
                            <p><span>Or find charities in your <a className="card-links" href="/private/charity-locations">area</a></span></p>
                        </div>
                    ) : (
                            props.volunteer.jobsApplied.map((jobs, i) => {
                                function convertDateToString() {
                                    const day = jobs.date.toDateString().split(" ").slice(0, 3).join(" ");
                                    let time = jobs.date.toLocaleString().split("").slice(10).join("").split('');
                                    time.splice(3, 3);
                                    return time.join('') + " " + day;
                                }
                                return (
                                    <div key={i}>
                                        <div className="job-card-profile card">
                                            <div class="card-top profile-card-top">
                                                <img src={jobs.charity.photo} className="card-img-top" alt="volunteer profile image" />
                                                <a href={`/private/charity-profile/${jobs.charity._id}`} className="card-text">{jobs.charity.name}</a>
                                            </div>
                                            <div className="card-body">
                                                <h4 className="card-title">{jobs.title}</h4>
                                                <p className="card-text">
                                                    Start Date/Time:
                                                <span>{convertDateToString()}</span>
                                                </p>
                                                <p className="card-text">
                                                    <span>{jobs.description}</span>
                                                </p>
                                                <p>Volunteers:
                                                {jobs.volunteers.map((oneVolunteer, i) => {
                                                    return (
                                                        <span>
                                                            <a key={i} href={`/private/volunteer-profile/${oneVolunteer.volunteer._id}`} className="card-links card-text">{oneVolunteer.volunteer.name} </a>
                                                        </span>
                                                    )
                                                })}
                                                </p>
                                                <br />
                                                {props.admin ? (
                                                    <a className="leave-job action-btn delete-btn btn" href={`/private/volunteer-profile/delete/${jobs._id}`}>Leave Job</a>
                                                ) :
                                                    null
                                                }
                                                <div className="scroll-down">
                                                    <p className="scroll"><span>Scroll</span></p>
                                                    <p className="arrow-down"><span>&#62;</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }
                </div>
            </section>
        </Layout>
    )
}

module.exports = VolunteerProfile;