const React = require('react');
const Layout = require('./Layout');

function JobListings(props) {
    return (
        <Layout>
            <div id="cards">{props.foundJobs.map((foundJob, i) => {
                return (
                    <div key={i}>
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{foundJob.title}</h5>
                                <p className="card-text">{foundJob.date.toLocaleString()}</p>
                                <a href={`/private/charity-profile/${foundJob.charity._id}`} className="card-text">{foundJob.charity.name}</a>
                                <p className="card-text">{foundJob.description}</p>
                                <p className="card-text">{foundJob.skillsRequired}</p>
                                <a href="#" className="btn btn-primary">Join Now</a>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </Layout>
    )
}


module.exports = JobListings;