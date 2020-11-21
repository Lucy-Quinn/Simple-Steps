const React = require("react");
const Layout = require("./Layout");
const JobCard = require('./components/JobCard');


function CharityProfile(props) {

    return (
        <Layout title={`${props.charity.name} Profile`} isLoggedIn={true} userProfile={props.charity}>
            <div>
                <h1>{props.charity.name}</h1>
                <img src = {props.charity.photo} />
                <h3>Description</h3>
                <p>{props.charity.description}</p>
                {
                    props.admin 
                    ?   (<button>
                            <a href={`/private/charity-profile/edit/${props.charity._id}`}>Edit</a>
                        </button>)
                    : null
                }
                
            </div>
            <div>
                {props.charity.jobsCreated.map((jobs, i)=>{
                    return(
                        <div key={i}>
                        <JobCard foundJob={jobs} charity={props.charity} isCharityProfilePage={true}></JobCard>
                        </div>
                    )
                })}

              
            </div>
        </Layout>

    )

}

module.exports = CharityProfile;