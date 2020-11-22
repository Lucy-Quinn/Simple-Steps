const React = require("react");
const Layout = require("./Layout");


function VolunteerProfile(props) {
    console.log('props.volunteer', props.volunteer)
    return (
        <Layout title={`${props.volunteer.name}`} isLoggedIn={true} userProfile={props.volunteer}>
            <div>
                <h1>{props.volunteer.name}</h1>
                {/* <img src={props.volunteer.photo} /> */}
                <p>Age: {props.volunteer.age}</p>
                <p>Skills: {props.volunteer.skills}</p>
                <h3>About Me:</h3>
                <p>{props.volunteer.description}</p>
                {
                    props.admin
                        ? (<button>
                            <a href={`/private/volunteer-profile/edit/${props.volunteer._id}`}>Edit</a>
                        </button>)
                        : null
                }

            </div>
            <div>
                {props.volunteer.jobsApplied.map((jobs, i) => {
                    return (
                        <div key={i}>
                            {/* OLD JOB CARD */}
                            {/* <JobCard foundJob={jobs} volunteer={props.volunteer} isVolunteerProfilePage={true}></JobCard> */}

                            <div className="card">
                                <div class="card-header">
                                    <img src={props.volunteer.photo} className="card-img-top" />
                                    <h5 className="card-title">{jobs.title}</h5>
                                </div>

                                <div className="card-body">
                                    {/* <p className="card-text">{props.foundJob.date.toLocaleString()}</p> */}
                                    <a href={`/private/charity-profile/${jobs.charity._id}`} className="card-text">{jobs.charity.name}</a>
                                    <p>Description:</p>
                                    <p className="card-text">{jobs.description}</p>
                                    <p>Skills Required:</p>
                                    <p className="card-text">{jobs.skillsRequired}</p>
                                    {/* {jobs.volunteers.map((oneVolunteer, i) => {
                                        return (
                                            <a key={i} href={`/private/volunteer-profile/${oneVolunteer.volunteer._id}`} className="card-text">{oneVolunteer.volunteer.name}</a>
                                        )
                                    })} */}

                                    <br />
                                </div>
                            </div>


                        </div>
                    )
                })}


            </div>
        </Layout>

    )

}

module.exports = VolunteerProfile;