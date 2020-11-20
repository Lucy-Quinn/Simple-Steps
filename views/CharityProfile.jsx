const React = require("react")
const Layout = require("./Layout")


function CharityProfile(props) {

    return (
        <Layout title="Charity Profile">
            <div>
                <h1>{props.charity.name}</h1>

                {
                    props.admin ? <button>Edit</button> : null
                }
            </div>
        </Layout>

    )

}

module.exports = CharityProfile;