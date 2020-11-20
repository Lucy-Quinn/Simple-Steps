const React = require('react');
const Layout = require('./Layout');
const JobCard = require('./components/JobCard');

function JobListings(props) {
    return (
        <Layout>
            <h1>Jobs for you {props.user.name}!</h1>
            <div id="cards">{props.foundJobs.map((foundJob, i) => {
                return (
                    <div key={i}>
                        <JobCard foundJob={foundJob}></JobCard>
                    </div>
                )
            })}
            </div>
        </Layout>
    )
}


module.exports = JobListings;