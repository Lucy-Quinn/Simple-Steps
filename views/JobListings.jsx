const React = require('react');
const Layout = require('./Layout');
const JobCard = require('./components/JobCard');

function JobListings(props) {
    return (
        // isLoggedIn = to change content of navbar when user is loggedIn
        //userLoggedIn = the user document of the current user who is logged in 
        <Layout title="Job Listings" isLoggedIn={true} userLoggedIn={props.userLoggedIn}>
            <section className="job-listing-section">
                <div className="job-listings">
                    {props.userLoggedIn.userType === "charity" ?
                        <h1>Jobs Available</h1>
                        :
                        <h1>Available jobs for {props.userLoggedIn.name}!</h1>
                    }
                </div>
                <div id="cards">{props.foundJobs.map((foundJob, i) => {
                    return (
                        <div key={i}>
                            <JobCard foundJob={foundJob} userLoggedIn={props.userLoggedIn}></JobCard>
                        </div>
                    )
                })}
                </div>
                <a className="action-btn charity-locations-btn btn" href="/private/charity-locations">Charity Locations</a>
            </section>
        </Layout>
    )
}

module.exports = JobListings;