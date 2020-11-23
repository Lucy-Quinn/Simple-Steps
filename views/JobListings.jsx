const React = require('react');
const Layout = require('./Layout');
const JobCard = require('./components/JobCard');

function JobListings(props) {
    return (
        // isLoggedIn = to change content of navbar when user is loggedIn
        //userProfile = the user document of the current user who is logged in 
        <Layout title="Job Listings" isLoggedIn={true} userLoggedIn={props.userLoggedIn}>
            {props.userLoggedIn.userType === "charity"
                ? <h1>Jobs Available</h1>
                : <h1>Jobs for you {props.userLoggedIn.name}!</h1>
            }

            <div id="cards">{props.foundJobs.map((foundJob, i) => {
                return (
                    <div key={i}>
                        <JobCard foundJob={foundJob} userLoggedIn={props.userLoggedIn}></JobCard>
                    </div>
                )
            })}
            </div>
        </Layout>
    )
}
module.exports = JobListings;