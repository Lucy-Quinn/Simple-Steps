const React = require("react");
const Layout = require("./Layout");


function VolunteerProfileEdit(props) {

    return (
        //props.foundVolunteer will always be the user that is logged in
        <Layout title="Edit Your Profile" isLoggedIn={true} userLoggedIn={props.foundVolunteer}>
            <section className="edit-profile-section">
                <h1>Edit your Profile</h1>
                <form className="profile-edit-form" action={`/private/volunteer-profile/edit?volunteerid=${props.foundVolunteer._id}`} method="POST">
                    <label>Name:</label>
                    <input type="text" name="name" defaultValue={props.foundVolunteer.name} required />
                    <br />
    
                    <label>Email:</label>
                    <input type="email" name="email" defaultValue={props.foundVolunteer.email} required />
                    <br />
    
                    <label>Age:</label>
                    <input type="number" name="age" defaultValue={props.foundVolunteer.age} required />
                    <br />
    
                    <label>Skills:</label>
                    <input type="text" name="skills" defaultValue={props.foundVolunteer.skills} required />
                    <br />
    
    
                    <label>About Me:</label>
                    <textarea name="description" rows="4" cols="50" defaultValue={props.foundVolunteer.description} required />
    
                    <br />
    
    
                    <button className="edit-button action-btn btn" type="submit">
                        Save Changes
                    </button>
    
    
                </form>
            </section>




        </Layout>
    )
}

module.exports = VolunteerProfileEdit;
