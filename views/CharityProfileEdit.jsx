const React = require("react");
const Layout = require("./Layout");


function CharityProfileEdit(props) {

    return (
        <Layout>
            <form action={`/private/charity-profile/edit?charityid=${props.foundCharity._id}`} method="POST">

                <label>Name:</label>
                <input type="text" name="name" defaultValue={props.foundCharity.name} required/>
                <br />

                <label>Email: </label>
                <input type="email" name="email" defaultValue={props.foundCharity.email} required/>
                <br />

                <label>Description: </label>
                <textarea name="description" rows="4" cols="50" defaultValue ={props.foundCharity.description} required/>
                <br />

                <button className="edit-button" type="submit">
                Save Changes
                </button>
          
            </form>

            <form action={`/private/charity-profile/edit/add-job?charityid=${props.foundCharity._id}`} method="POST">

                <label>Title:</label>
                <input type="text" name="title" required/>
                <br />

                <label>Date:</label>
                <input type="date" name="date" required/>
                <br />

                <label>Description:</label>
                <textarea name="description" rows="4" cols="50" required/>
                <br />

                <label>Address:</label>
                <label>Street:</label>
                <input type="text" name="street" required/>

                <br />

                <label>City:</label>
                <input type="text" name="city" required/>

                <br />

                <label>Country:</label>
                <input type="text" name="country" required/>

                <br />

                <label>Postcode:</label>
                <input type="text" name="postcode" required/>
                <br />

                <label>Skills Required:</label>
                <input type="text" name="skillsRequired" required/>
                <br />

                <button className="edit-button" type="submit">
                Add Job
                </button>


            </form>

           
    

        </Layout>
    )
}

module.exports = CharityProfileEdit;
