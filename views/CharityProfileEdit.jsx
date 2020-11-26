const React = require("react");
const Layout = require("./Layout");


function CharityProfileEdit(props) {

    return (
        //props.foundCharity will always be the user that is logged in
        <Layout title="Edit Your Profile" isLoggedIn={true} userLoggedIn={props.foundCharity}>
        <section className = "edit-profile-section">
        <h1>Edit your Profile</h1>

            <form className="profile-edit-form"  action={`/private/charity-profile/edit?charityid=${props.foundCharity._id}`} method="POST">

                <label>Name:</label>
                <input type="text" name="name" defaultValue={props.foundCharity.name} required />
                <br />

                <label>Email: </label>
                <input type="email" name="email" defaultValue={props.foundCharity.email} required />
                <br />

                <label>Description: </label>
                <textarea name="description" rows="4" cols="50" defaultValue={props.foundCharity.description} required />

                <br />

                <label>Address:</label>
                <label>Building/House:</label>
                <input type="text" name="building" defaultValue={props.foundCharity.address.building} required />

                <br />

                <label>Street:</label>
                <input type="text" name="street" defaultValue={props.foundCharity.address.street} required />

                <br />

                <label>City:</label>
                <input type="text" name="city" defaultValue={props.foundCharity.address.city} required />

                <br />

                <label>Postcode:</label>
                <input type="text" name="postcode" defaultValue={props.foundCharity.address.postcode} required />
                <br />

                <button className="edit-button action-btn btn" type="submit">
                    Save Changes
                </button>

            </form>

            <div className=" edit-form-border"></div>

            <form className="profile-edit-form"  action={`/private/charity-profile/edit/add-job?charityid=${props.foundCharity._id}`} method="POST">
            <h1>Add a Job</h1>

                <label>Title:</label>
                <input type="text" name="title" required />
                <br />

                <label>Date:</label>
                <input type="datetime-local" name="date" required />
                <br />

                <label>Description:</label>
                <textarea name="description" rows="4" cols="50" required />
                <br />

                <label>Skills Required:</label>
                <input type="text" name="skillsRequired" required />
                <br />

                <button className="edit-button action-btn btn" type="submit">
                    Add Job
                </button>


            </form>

</section>


        </Layout>
    )
}

module.exports = CharityProfileEdit;
