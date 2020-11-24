const React = require("react");
const Layout = require("./Layout");


function CharityProfile(props) {
    // console.log('jobscreated', props.charity.jobsCreated)

    return (
        <Layout title={`${props.charity.name} Profile`} isLoggedIn={true} userLoggedIn={props.userLoggedIn}>
            <div>
                <h1>{props.charity.name}</h1>
                <img src={props.charity.photo} />
                <h3>Description</h3>
                <p>{props.charity.description}</p>
                {
                    props.admin
                        //if admin is true (i.e. is current user who is logged in charity user) then we can see edit button
                        ? (<button>
                            <a href={`/private/charity-profile/edit/${props.charity._id}`}>Edit</a>
                        </button>)
                        : null
                }
            </div>

            <div>
                {props.foundJob.map((jobs, i) => {
                    return (
                        <div key={i}>

                            {/* OLD JOB CARD */}
                            {/* <JobCard foundJob={jobs} charity={props.charity} isUserTypeCharity={props.charity.userType === "charity"} isCharityProfilePage={true}></JobCard> */}

                            <div className="card">
                                <div class="card-header">
                                    <img src={props.charity.photo} className="card-img-top" />
                                    <h5 className="card-title">{jobs.title}</h5>
                                </div>

                                <div className="card-body">
                                    {/* <p className="card-text">{props.foundJob.date.toLocaleString()}</p> */}
                                    <a href={`/private/charity-profile/${jobs.charity._id}`} className="card-text">{props.charity.name}</a>
                                    <p>Description:</p>
                                    <p className="card-text">{jobs.description}</p>
                                    <p>Skills Required:</p>
                                    <p className="card-text">{jobs.skillsRequired}</p>
                                    {jobs.volunteers.map((oneVolunteer, i) => {
                                        //put ternary in for null 

                                        return (
                                            <a key={i} href={`/private/volunteer-profile/${oneVolunteer.volunteer._id}`} className="card-text">{oneVolunteer.volunteer.name}</a>
                                        )
                                    })}

                                    <br />
                                    {/* If user logged in is usertype === 'charity' do not show join now button */}
                                    {props.userLoggedIn.userType === 'charity'
                                        ? null
                                        : (<a href={`/private/join-job/${jobs._id}`} className="btn btn-primary">Join Now</a>)}
                                </div>
                            </div>

                            {/* Delete job button */}
                            { props.admin
                                ? (<button>
                                    <a href={`/private/charity-profile/delete/${jobs._id}`}>Delete Job</a>
                                </button>)
                                : null
                            }
                        </div>
                    )
                })}


            </div>
        </Layout>

    )

}

module.exports = CharityProfile;