const React = require('react');
const Layout = require('./Layout');

function Signup(props) {
    return (
        <Layout title="Charity Sign Up" isLoggedIn={false}>
            <section class="signup-section signup-section-charity">
                <div class="signup-card charity-signup-card">
                    <h1>Charity Signup</h1>
                    <form class="signup-form" action="/auth/signup/charity" method="POST" encType="multipart/form-data">

                        <label>Name</label>
                        <input type="text" name="name" placeholder="Your full name" required></input>

                        <label>Username</label>
                        <input type="text" name="username" placeholder="Your username" required></input>

                        <label>Email</label>
                        <input type="email" name="email" placeholder="Your email address" required></input>

                        <label>Description</label>
                        <textarea name="description" rows="4" cols="50" placeholder="A brief description about yourself" required />

                        <label>Address:</label>
                        <label>Building/House:</label>
                        <input type="text" name="building" placeholder="Building number" required />
                        <br />

                        <label>Street:</label>
                        <input type="text" name="street" placeholder="Street name" required />
                        <br />

                        <label>City:</label>
                        <input type="text" name="city" placeholder="City" required />
                        <br />

                        <label>Postcode:</label>
                        <input type="text" name="postcode" placeholder="Postcode" required />
                        <br />

                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" required></input>

                        <label>Upload Charity Logo</label>
                        <input type='file' name='profilepic' />

                        <button className="signup-button action-btn btn" type="submit">Sign Up</button>
                        {
                            props.errorMessage ? (
                                <div className="error-message">{
                                    props.errorMessage
                                }</div>
                            ) :
                                null
                        }
                    </form>
                </div>
            </section>
        </Layout>
    )
}

module.exports = Signup;