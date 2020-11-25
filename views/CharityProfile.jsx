const React = require("react");
const Layout = require("./Layout");


function CharityProfile(props) {
    console.log('props.admin', props.admin)

    return (
        <Layout title={`${props.charity.name} Profile`} isLoggedIn={true} userLoggedIn={props.userLoggedIn}>
            <section className="profile">
            <div className="profile-info-charity profile-info">
            
                <h1>{props.charity.name}'s Profile</h1>
                <img className="profile-img-charity profile-img" src={props.charity.photo} />
                <div className="profile-details">
                    <p className="charity-description"><span>{props.charity.description}</span></p>
                </div>
                {
                    props.admin
                        //if admin is true (i.e. is current user who is logged in charity user) then we can see edit button
                        ? (
                            <a className="action-btn btn" href={`/private/charity-profile/edit/${props.charity._id}`}>Edit</a>
                        )
                        : null
                }
            </div>

            <div className="profile-job-cards">
            {props.charity.jobsCreated.length === 0 
                    ? 
                        [(props.admin

                        ?
                        <div className="no-jobs">

                            <h3>You have not created any jobs yet.</h3>
                            <p><span>Go to your edit page and create a job now. Those simpe steps matter!</span></p>
                        </div>

                            :
                            <div className="no-jobs">
                            <h3>No jobs have been added yet.</h3>
                            <p><span>Please check again later.</span></p>
                        </div>
                        )]
                    
                    : (
                props.charity.jobsCreated.map((jobs, i) => {
                    return (
                        <div key={i}>

                            {/* OLD JOB CARD */}
                            {/* <JobCard foundJob={jobs} charity={props.charity} isUserTypeCharity={props.charity.userType === "charity"} isCharityProfilePage={true}></JobCard> */}

                            <div className="job-card-profile card">
                                <div class="card-top profile-card-top">
                                    <img src={props.charity.photo} className="card-img-top" />
                                    <a href={`/private/charity-profile/${jobs.charity._id}`} className="card-text">{props.charity.name}</a>
                                </div>

                                <div className="card-body">
                                <h4 className="card-title">{jobs.title}</h4>

                                    <p className="card-text">Start Date/Time: <span>{jobs.date.toLocaleString().slice(0, -3)}</span></p>

                                    <p className="card-text"><span>{jobs.description}</span></p>
                                    <p>Volunteers: 

                                    {jobs.volunteers.map((oneVolunteer, i) => {
                                        //put ternary in for null 

                                        return (
                                            <span> <a key={i} href={`/private/volunteer-profile/${oneVolunteer.volunteer._id}`} className="card-links card-text">{oneVolunteer.volunteer.name}</a></span>
                                        )
                                    })}
                                    </p>
                                    <br />
                                    {/* If user logged in is usertype === 'charity' do not show join now button */}
                                    {props.userLoggedIn.userType === 'charity'
                                        ? null
                                        : (<a href={`/private/join-job/${jobs._id}`} className="btn btn-primary">Join Now</a>)}
                                </div>
                            </div>

                            {/* Delete job button */}
                            { props.admin
                                ? 
                                    <a className="action-btn delete-btn btn" href={`/private/charity-profile/delete/${jobs._id}`}>Delete Job</a>
                                : null
                            }
                        </div>
                    )
                    }))}


            </div>
            </section>
        </Layout>

    )

}

module.exports = CharityProfile;