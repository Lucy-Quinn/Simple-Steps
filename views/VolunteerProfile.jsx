const React = require("react");
const Layout = require("./Layout");


function VolunteerProfile(props) {
    // console.log('props.volunteer', props.volunteer)
    return (
        <Layout title={`${props.volunteer.name}`} isLoggedIn={true} userLoggedIn={props.userLoggedIn}>
            <section className="profile">
                <div className="profile-info">

                    <h1>{props.volunteer.name}</h1>
                    <img className="profile-img" src={props.volunteer.photo} />
                    <div className="profile-details">
                        <p>Age:<span> {props.volunteer.age}</span></p>
                        <p>Skills: <span>{props.volunteer.skills}</span></p>
                        <p>About Me:</p>
                        <p><span>{props.volunteer.description}</span></p>
                    </div>
                    {
                        props.admin
                            ? (
                                <a className="action-btn btn" href={`/private/volunteer-profile/edit/${props.volunteer._id}`}>Edit</a>
                            )
                            : null
                    }

                </div>
                <div className="profile-job-cards">
                {props.volunteer.jobsApplied.length === 0 
                    ? (
                        <div>
                        <h2>You have not joined any volunteer projects yet.</h2>
                            <p>Go out and get volunteering. Click <a href="/private/job-listings">here</a></p>
                            <p>Or find charities in your <a href="/private/charity-locations">area</a></p>
                        </div>
                        
                    )
                    : (
                        props.volunteer.jobsApplied.map((jobs, i) => {
                        return (
                            <div key={i}>
                                {/* OLD JOB CARD */}
                                {/* <JobCard foundJob={jobs} volunteer={props.volunteer} isVolunteerProfilePage={true}></JobCard> */}

                                <div className="job-card-profile card">
                                    <div class="card-top profile-card-top">
                                        <img src={jobs.charity.photo} className="card-img-top" />
                                        <a href={`/private/charity-profile/${jobs.charity._id}`} className="card-text">{jobs.charity.name}</a>

                                    </div>

                                    <div className="card-body">
                                    <h4 className="card-title">{jobs.title}</h4>
                                    <p className="card-text">Start Date/Time: <span>{jobs.date.toLocaleString().slice(0, -3)}</span></p>

                                        <p className="card-text"><span>{jobs.description}</span></p>
                                        <p>Volunteers: 
                                        
                                        {jobs.volunteers.map((oneVolunteer, i) => {
                                            //put ternary in for null 
                                            return (
                                                <span> <a key={i} href={`/private/volunteer-profile/${oneVolunteer.volunteer._id}`} className="card-links card-text">{oneVolunteer.volunteer.name}</a> </span>
                                            )
                                        })}
</p>
                                        <br />
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