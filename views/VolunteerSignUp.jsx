const React = require('react');
const Layout = require('./Layout');

function Signup(props) {
    return (
        <Layout title="Volunteer Sign Up" isLoggedIn={false}>
            <section class="signup-section signup-section-volunteer">
                <div class="signup-card volunteer-signup-card">

                    <h1 className="signup-title">Volunteer Signup</h1>
                    <form class="signup-form" action="/auth/signup/volunteer" method="POST" encType="multipart/form-data">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Your full name" required></input>

                        <label>Username</label>
                        <input type="text" name="username" placeholder="Your username" required></input>

                        <label>Email</label>
                        <input type="email" name="email" placeholder="Your email address" required></input>

                        <label>Description</label>
                        <textarea name="description" rows="4" cols="50" placeholder="A brief description about yourself" required />

                        <label>Age</label>
                        <input type="number" name="age" placeholder="Your age" required></input>

                        <label>Skills</label>
                        <input type="text" name="skills" placeholder="Your Skills" required></input>



                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" required></input>
                        {/* 
                <label>Repeat Password</label>
                <input type="password" name="repeat-password" placeholder="Password"></input> */}


                        <label>Upload Profile Picture</label>
                        <input type='file' name='profilepic' />


                        <button className="action-btn btn" type="submit">Sign Up</button>

                        {
                            props.errorMessage ?
                                (<div className="error-message">{props.errorMessage}</div>)
                                :
                                null
                        }
                    </form>
                </div>
            </section>
        </Layout>
    )
}




module.exports = Signup;