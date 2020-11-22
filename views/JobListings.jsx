const React = require('react');
const Layout = require('./Layout');
const JobCard = require('./components/JobCard');

function JobListings(props) {
    return (
        <Layout title="Job Listings" isLoggedIn={true} userProfile={props.user}>
            {props.user.userType === "charity"
                ? <h1>Jobs Available</h1>
                : <h1>Jobs for you {props.user.name}!</h1>
            }

            <div id="cards">{props.foundJobs.map((foundJob, i) => {
                return (
                    <div key={i}>
                        <JobCard foundJob={foundJob} isCharityProfilePage={false}></JobCard>
                    </div>
                )
            })}
            </div>
        </Layout>
    )
}
module.exports = JobListings;