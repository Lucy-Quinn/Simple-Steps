const React = require("react");
const Layout = require("./Layout");


function CharityProfileEdit(props) {

    return (
        <Layout>
            <form action={`/private/charity-profile/edit?charityid=${props.foundCharity._id}`} method="POST">

                <label>Name:</label>
                <input type="text" name="name" defaultValue={props.foundCharity.name} />
                <br />

                <label>Email: </label>
                <input type="email" name="email" defaultValue={props.foundCharity.email}/>
                <br />

                <label>Description: </label>
                <textarea name="description" rows="4" cols="50" defaultValue ={props.foundCharity.description}/>
                <br />

                <button className="edit-button" type="submit">
                Save Changes
                </button>

                


            </form>

           
    

        </Layout>
    )
}

module.exports = CharityProfileEdit;
