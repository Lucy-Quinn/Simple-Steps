const React = require("react");
const Layout = require("./Layout");
const JobCard = require('./components/JobCard');


function CharityProfile(props) {

    return (
        <Layout title="Charity Profile">
            <div>
                <h1>{props.charity.name}</h1>
                <img src = {props.charity.photo} />
                <h3>Description</h3>
                <p>{props.charity.description}</p>
                <button>
                    <a href={`/private/charity-profile/edit/${props.charity._id}`}>Edit</a>
                </button>
            </div>
            <div>
                {props.charity.jobsCreated.map((jobs, i)=>{
                    return(
                        <div key={i}>
                        <JobCard foundJob={jobs} charity={props.charity} isCharityProfile={true}></JobCard>
                        </div>
                    )
                })}

                {
                    props.admin ? <button>Edit</button> : null
                }
            </div>
        </Layout>

    )

}

module.exports = CharityProfile;