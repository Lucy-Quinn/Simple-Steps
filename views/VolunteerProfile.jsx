const React = require("react");
const Layout = require("./Layout");
const JobCard = require('./components/JobCard');


function VolunteerProfile(props) {

    return (
        <Layout title={`${props.volunteer.name}`}  isLoggedIn={true} userProfile={props.volunteer}>
            <div>
                <h1>{props.volunteer.name}</h1>
                <img src = {props.volunteer.photo} />
                <p>Age: {props.volunteer.age}</p>
                <p>Skills: {props.volunteer.skills}</p>
                <h3>Description</h3>
                <p>{props.volunteer.description}</p>
                {
                    props.admin 
                    ?   (<button>
                            <a href={`/private/volunteer-profile/edit/${props.volunteer._id}`}>Edit</a>
                        </button>)
                    : null
                }
                
            </div>
            <div>
                {props.volunteer.jobsApplied.map((jobs, i)=>{
                    return(
                        <div key={i}>
                        <JobCard foundJob={jobs} volunteer={props.volunteer} isVolunteerProfilePage={true}></JobCard>
                        </div>
                    )
                })}

              
            </div>
        </Layout>

    )

}

module.exports = VolunteerProfile;